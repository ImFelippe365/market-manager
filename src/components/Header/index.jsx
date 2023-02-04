import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';

const Header = ({ backButton = false }) => {
    return (
        <View style={styles.container}>
            {
                backButton &&
                <TouchableOpacity></TouchableOpacity>
            }
        </View>
    )
}

export default Header;