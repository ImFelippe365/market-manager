import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import { Input, PasswordInput } from '../../components/Input';
import HorizontalLine from '../../components/Lines';

import styles from './styles';

const SignIn = () => {

    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entrar</Text>
            <Input
                style={styles.emailField}
                placeholder="Seu endereço de e-mail"
            />
            <PasswordInput
                placeholder="Sua senha"
            />
            <Text style={styles.forgetPassword}>Esqueceu a senha?</Text>
            <Button onPress={() => navigate('Home')} name="Entrar" />

            <HorizontalLine style={styles.horizontalLine}/>

            <Text style={styles.signUpMessage}>Não tem uma conta?  
                <Text onPress={() => navigate('SignUp')} style={styles.signUpAnchor}> Cadastre-se</Text>
            </Text>
        </View>
    );
}

export default SignIn;