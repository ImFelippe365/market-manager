import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import styles from './styles';
import Header from './../../components/Header/index';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../../components/Button';
import { Input, MaskedInput, PasswordInput } from './../../components/Input/index';

const SignUp = () => {

    const signUpSchema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        establishment_name: yup.string().required("Campo obrigatório"),
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        phone: yup.string().required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório"),
        confirm_password: yup.string()
            .required("Campo obrigatório")
            .oneOf([yup.ref('password')], 'As senhas não coincidem'),
    })

    const { control, handleSubmit, formState: { errors }, register } = useForm({
        resolver: yupResolver(signUpSchema)
    });

    const submitForm = (data) => {
        console.log(data)
    }

    return (
        <ScrollView style={styles.container}>
            <Header backButton />
            <Text style={styles.title}>Criar uma nova conta</Text>

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) =>
                    <Input
                        style={styles.inputSpacing}
                        inputRef={ref}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        label="Seu nome"
                        error={errors?.name?.message}
                        placeholder="Ex: Ana Júlia"
                    />
                }
                name='name'
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
                        label="Nome do estabelecimento"
                        error={errors?.establishment_name?.message}
                        placeholder="Ex: Mercado dois irmãos"
                    />
                }
                name='establishment_name'
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
                        label="E-mail"
                        error={errors?.email?.message}
                        placeholder="nome@email.com"
                    />
                }
                name='email'
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
                        label="Celular"
                        error={errors?.phone?.message}
                        placeholder="(xx) xxxxx-xxxx"
                        mask="(99) 99999-9999"
                        keyboardType={'numeric'}
                    />
                }
                name='phone'
            />

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) =>
                    <PasswordInput
                        style={styles.inputSpacing}
                        inputRef={ref}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        label="Senha"
                        error={errors?.password?.message}
                        placeholder="Escolha uma senha segura"
                    />
                }
                name='password'
            />

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) =>
                    <PasswordInput
                        style={styles.inputSpacing}
                        inputRef={ref}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        label="Confirme sua senha"
                        error={errors?.confirm_password?.message}
                        placeholder="Digite novamente sua senha"
                    />
                }
                name='confirm_password'
            />


            <Text style={styles.termsMessage}>
                Ao criar uma nova conta, você está aceitando os nossos
                <Text style={styles.termsHighlight}> Termos e condições</Text> e nossa <Text style={styles.termsHighlight}>Política de privacidade</Text>.
            </Text>

            <Button onPress={handleSubmit(submitForm, submitForm)} name="Finalizar" />
        </ScrollView>
    );
}

export default SignUp;