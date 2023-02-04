import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Header from './../../components/Header/index';
import { SearchInput } from '../../components/Input';
import Card from '../../components/Card';
import styles from './styles';
import { Plus } from 'react-native-feather';
import theme from './../../styles/theme';
import { useNavigation } from '@react-navigation/native';

const Items = () => {

    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Seus itens</Text>
            <SearchInput
                placeholder="Procurando algo?"
                style={styles.searchBar}
            />
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 12,]}
                horizontal={false}
                numColumns={2}
                style={styles.itemsList}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={styles.itemColumns}
                contentContainerStyle={styles.itemsContainer}
                renderItem={({ item }) =>
                    <Card
                        name={"Macarrão"}
                        sold={0}
                        price={'2,00'}
                        style={styles.cardSize}
                    />
                }
            />
            <TouchableOpacity onPress={() => navigate('CreateItem')} style={styles.floatButton}>
                <Plus color={theme.colors.white} />
            </TouchableOpacity>
        </View>
    );
}

export default Items;