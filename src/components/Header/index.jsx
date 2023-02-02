import React from 'react';
import { TouchableOpacity, View } from 'react-native';

// import { Container } from './styles';

const Header = ({ backButton = false }) => {
    return (
        <View>
            {
                backButton &&
                <TouchableOpacity></TouchableOpacity>
            }
        </View>
    )
}

export default Header;