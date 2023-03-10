import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Camera, Eye, EyeOff, Search } from "react-native-feather";
import theme from '../../styles/theme';
import styles from './styles';
import { MaskedTextInput } from 'react-native-mask-text';

export const Input = ({ label, style, error, ...props }) => {
    return (
        <View style={[styles.container, style]}>
            {label && <Text style={[styles.label, error && styles.errorMode]}>{label}</Text>}
            <TextInput
                style={[styles.input, error && styles.errorMode]}
                {...props}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

export const PasswordInput = ({ label, style, error, ...props }) => {

    const [isHidden, setIsHidden] = useState(true);

    const hidePassword = () => {
        setIsHidden(!isHidden)
    }

    return (
        <View style={[styles.container, style]}>
            {label && <Text style={[styles.label, error && styles.errorMode]}>{label}</Text>}
            <View style={[styles.inputContainer, error && styles.errorMode]}>
                <TextInput
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
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

export const MaskedInput = ({ label, style, error, ...props }) => {
    const currentStyle = !error ? styles.input : {
        ...styles.input,
        ...styles.errorMode
    }
    return (
        <View style={[styles.container, style]}>
            {label && <Text style={[styles.label, error && styles.errorMode]}>{label}</Text>}
            <MaskedTextInput
                style={currentStyle}
                {...props}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

export const SearchInput = ({ label, style, ...props }) => {

    return (
        <View style={[styles.container, style]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputContent}
                    {...props}
                />
                <Search width={20} height={20} color={theme.colors.gray} />
            </View>
        </View>
    );
}

export const BarCodeInput = ({ label, style, onBarCodePress, ...props }) => {

    return (
        <View style={[styles.container, style]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputContent}
                    {...props}
                />
                <TouchableOpacity onPress={onBarCodePress}>
                    <Camera width={20} height={20} color={theme.colors.primary} />
                </TouchableOpacity>
            </View>
        </View>
    );
}