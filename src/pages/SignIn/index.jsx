import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Alert, Text, View } from 'react-native';
import Button from '../../components/Button';
import { Input, PasswordInput } from '../../components/Input';
import { HorizontalLine } from '../../components/Lines';
import * as yup from 'yup';
import styles from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import api from './../../services/api';
import useAuth from './../../hooks/useAuth';

const SignIn = () => {

    const { navigate } = useNavigation();
    const { login } = useAuth();

    const signInSchema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório"),
    })

    const { control, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(signInSchema)
    });

    const onSubmitLogin = async (data) => {
        try {
            const response = await api.get(`users?email=${data.email}`)
            if (response.data.length > 0) {
                const user = response.data[0];
                if (user.password === data.password) {
                    login(user);
                } else {
                    setError("password", { message: "Senha incorreta" })
                }
            } else {
                setError("email", { message: "E-mail não cadastrado" })
            }
        } catch (err) {
            console.warn(err)
            Alert.alert("Houve um erro ao tentar se logar", "Tente se logar novamente ")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entrar</Text>

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) =>
                    <Input
                        inputRef={ref}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        style={styles.emailField}
                        error={errors?.email?.message}
                        placeholder="Seu endereço de e-mail"
                    />
                }
                name='email'
            />

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) =>
                    <PasswordInput
                        error={errors?.password?.message}
                        placeholder="Sua senha"
                        inputRef={ref}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        style={styles.emailField}
                    />
                }
                name='password'
            />

            {errors?.auth?.message && <Text style={styles.authError}>{errors?.auth?.message}</Text>}

            <Text style={styles.forgetPassword}>Esqueceu a senha?</Text>
            <Button loading={isSubmitting} onPress={handleSubmit(onSubmitLogin)} name="Entrar" />

            <HorizontalLine style={styles.horizontalLine} />

            <Text style={styles.signUpMessage}>Não tem uma conta?
                <Text onPress={() => navigate('SignUp')} style={styles.signUpAnchor}> Cadastre-se</Text>
            </Text>
        </View>
    );
}

export default SignIn;