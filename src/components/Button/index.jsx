import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import styles from './styles';

const Button = ({ name, type, style, ...props }) => {
    return (
        <TouchableOpacity style={[styles.buttonContainer, style]} {...props}>
            <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
    );
}

export default Button;