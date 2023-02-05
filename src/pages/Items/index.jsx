import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import Header from './../../components/Header/index';
import { SearchInput } from '../../components/Input';
import Card from '../../components/Card';
import styles from './styles';
import { Plus } from 'react-native-feather';
import theme from './../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import api from './../../services/api';

const Items = () => {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState('');
    const [loading, setLoading] = useState(true);

    const searchResult = search ? searchResults : items;

    const { navigate } = useNavigation();

    const getItems = async () => {
        const { data } = await api.get('items')
        setItems(data)
        setLoading(false);
    }

    const getSearchResults = async () => {
        try {
            setLoading(true);
            const { data } = await api.get(`items?name_like=${search}`)
            setSearchResults(data)
        } catch (err) {
            console.warn(err)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getItems();
    }, [])

    useEffect(() => {
        if (search) {
            getSearchResults();
        }
    }, [search])

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Seus itens</Text>
            <SearchInput
                onChangeText={setSearch}
                placeholder="Procurando algo?"
                style={styles.searchBar}
            />
            {
                loading ?
                    <ActivityIndicator color={theme.colors.primary} /> :
                    <FlatList
                        data={searchResult}
                        horizontal={false}
                        numColumns={2}
                        style={styles.itemsList}
                        showsVerticalScrollIndicator={false}
                        columnWrapperStyle={styles.itemColumns}
                        contentContainerStyle={styles.itemsContainer}
                        renderItem={({ item }) =>
                            <Card
                                name={item.name}
                                image={item.image}
                                sold={item.sold}
                                price={item.price}
                                style={styles.cardSize}
                            />
                        }
                    />
            }

            <TouchableOpacity onPress={() => navigate('CreateItem')} style={styles.floatButton}>
                <Plus color={theme.colors.white} />
            </TouchableOpacity>
        </View>
    );
}

export default Items;