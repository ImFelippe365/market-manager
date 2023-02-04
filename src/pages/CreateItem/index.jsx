import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';

import styles from './styles';

const CreateItem = () => {
    return (
        <View style={styles.container}>
            <Header backButton />
            <Text style={styles.title}>Adicionar item</Text>
        </View>
    );
}

export default CreateItem;