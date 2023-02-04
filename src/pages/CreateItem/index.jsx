import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
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

const CreateItem = () => {

    const [itemImage, setItemImage] = useState();

    const createItemSchema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        price: yup.number().moreThan(0, "Defina um valor maior").required("Campo obrigatório"),
        category: yup.string().required("Campo obrigatório"),
        barcode: yup.number().required("Campo obrigatório"),
        quantity: yup.number().required("Campo obrigatório"),
    })

    const { control, handleSubmit, formState: { errors }, register } = useForm({
        resolver: yupResolver(createItemSchema)
    });

    const submitForm = (data) => {
        console.log(data)
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            base64: true,
            aspect: [16, 9],
            quality: 1,
            allowsMultipleSelection: false
        });

        console.log(result);

        if (!result.canceled) {
            setItemImage(result.assets[0].base64);
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
                            source={{ uri: 'data:image/jpeg;base64,' + itemImage }}
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
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        label="Código de barras"
                        error={errors?.barcode?.message}
                        placeholder="Código do item"
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
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        label="Quantidade disponível"
                        error={errors?.quantity?.message}
                        placeholder="Unidades"
                    />
                }
                name='quantity'
            />

            <Button name={"Criar item"} onPress={handleSubmit(submitForm)} />
        </ScrollView>
    );
}

export default CreateItem;