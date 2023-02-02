import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const Input = ({ label, ...props }) => {
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

const PasswordInput = ({ label, ...props }) => {
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

export { Input, PasswordInput };