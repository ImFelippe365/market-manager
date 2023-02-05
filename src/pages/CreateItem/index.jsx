import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import Header from '../../components/Header';
import * as yup from 'yup';
import styles from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Input, MaskedInput, PasswordInput } from '../../components/Input';
import Button from './../../components/Button/index';
import { Upload } from 'react-native-feather';
import theme from './../../styles/theme';
import * as ImagePicker from 'expo-image-picker';
import api from './../../services/api';
import { v4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import useItem from './../../hooks/useItem';

const CreateItem = () => {

    const createItemSchema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        price: yup.number().moreThan(0, "Defina um valor maior").required("Campo obrigatório"),
        category: yup.string().required("Campo obrigatório"),
        barcode: yup.number().typeError("Código inválido, digite apenas números").required("Campo obrigatório"),
        quantity: yup.number().typeError("Código inválido, digite apenas números").required("Campo obrigatório"),
        image: yup.mixed()
    })

    const {
        itemDetails,
        editItem
    } = useItem();
    console.log(itemDetails)
    const navigate = useNavigation();

    const [itemImage, setItemImage] = useState(itemDetails && itemDetails.image);

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(createItemSchema),
        defaultValues:
            itemDetails ?
                itemDetails
                : {
                    id: uuid.v4(),
                    sold: 0,
                    image: ''
                }
    });

    const submitForm = async (data) => {
        if (itemImage) {
            data.image = itemImage
        }
        try {
            const response = await api.post('items', data)
            Alert.alert("Sucesso!", "Seu item foi criado com sucesso.")
            navigate.goBack();
        } catch (err) {
            console.warn(err)
            Alert.alert("Erro", "Houve um erro ao tentar criar seu item")
        }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
            allowsMultipleSelection: false
        });

        if (!result.canceled) {
            setItemImage(result.assets[0].uri);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Header backButton />
            <Text style={styles.title}>Adicionar item</Text>

            {
                itemImage ?
                    <TouchableOpacity onPress={pickImage}>
                        <Image
                            style={styles.itemImage}
                            source={{ uri: itemImage }}
                            resizeMode='cover'
                        />
                    </TouchableOpacity> :
                    <TouchableOpacity onPress={pickImage} style={styles.sendImageContainer}>
                        <View style={styles.sendImageContent}>
                            <Upload width={32} height={32} color={theme.colors.primary} />
                            <Text style={styles.sendImageText}>Selecione uma imagem</Text>
                        </View>
                    </TouchableOpacity>
            }

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) =>
                    <Input
                        style={styles.inputSpacing}
                        inputRef={ref}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        label="Nome do item"
                        error={errors?.name?.message}
                        placeholder="Ex: Macarrão"
                    />
                }
                name='name'
            />

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) =>
                    <MaskedInput
                        inputRef={ref}
                        style={styles.inputSpacing}
                        onChangeText={(maskedText, text) => onChange(text)}
                        onBlur={onBlur}
                        value={value}
                        label="Preço (em reais)"
                        error={errors?.price?.message}
                        type="currency"
                        options={{
                            prefix: 'R$ ',
                            decimalSeparator: ',',
                            groupSeparator: '.',
                            precision: 2
                        }}
                        keyboardType={'numeric'}
                    />
                }
                name='price'
            />

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) =>
                    <Input
                        style={styles.inputSpacing}
                        inputRef={ref}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        label="Categoria"
                        error={errors?.category?.message}
                        placeholder="Ex: Verduras"
                    />
                }
                name='category'
            />

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) =>
                    <Input
                        style={styles.inputSpacing}
                        inputRef={ref}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        label="Código de barras"
                        error={errors?.barcode?.message}
                        placeholder="Código do item"
                        keyboardType={'numeric'}
                    />
                }
                name='barcode'
            />

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) =>
                    <Input
                        style={styles.inputSpacing}
                        inputRef={ref}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        label="Quantidade disponível"
                        error={errors?.quantity?.message}
                        placeholder="Unidades"
                        keyboardType={'numeric'}
                    />
                }
                name='quantity'
            />

            <Button
                style={{ marginTop: 18 }}
                loading={isSubmitting}
                name={"Criar item"}
                onPress={handleSubmit(submitForm)}
            />
        </ScrollView>
    );
}

export default CreateItem;