import React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native-feather'
import theme from '../../styles/theme';
import styles from './styles';

const EmptyImage = ({ small = false }) => {
    return (
        <View style={styles.container}>
            <Image width={small ? 36 : 64} height={small ? 36 : 64} color={theme.colors.primary} />
        </View>
    );
}

export default EmptyImage;