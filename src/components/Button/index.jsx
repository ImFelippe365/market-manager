import React from 'react';
import { TouchableOpacity, View } from 'react-native';

// import { Container } from './styles';

const Button = ({ name, type, ...props }) => {
    return (
        <TouchableOpacity {...props}>
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}

export default Button;