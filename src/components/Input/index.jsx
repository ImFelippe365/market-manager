import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

export const Input = ({ label, ...props }) => {
    return (
        <View>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={styles.input}
                {...props}
            />
        </View>
    );
}

export const Teste = ({ label, ...props }) => {
    return (
        <View>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={styles.input}
                {...props}
            />
        </View>
    );
}

export const PasswordInput = ({ label, ...props }) => {
    return (
        <>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputContent}
                    {...props}
                />
            </View>
        </>
    );
}
