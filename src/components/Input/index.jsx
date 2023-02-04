import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Eye, EyeOff } from "react-native-feather";
import theme from '../../styles/theme';
import styles from './styles';

export const Input = ({ label, style ,...props }) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[styles.input, style]}
                {...props}
            />
        </View>
    );
}

export const PasswordInput = ({ label, style, ...props }) => {

    const [isHidden, setIsHidden] = useState(true);

    const hidePassword = () => {
        setIsHidden(!isHidden)
    }

    return (
        <View style={[styles.container,style]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputContainer}>

                <TextInput
                    selectionColor={theme.colors.gray}
                    secureTextEntry={isHidden}
                    style={styles.inputContent}
                    {...props}
                />
                <TouchableOpacity onPress={hidePassword}>
                    {
                        isHidden ?
                        <EyeOff color={theme.colors.primary} width={18} height={18} /> :
                            <Eye color={theme.colors.primary} width={18} height={18} />
                    }
                </TouchableOpacity>
            </View>
        </View>
    );
}
