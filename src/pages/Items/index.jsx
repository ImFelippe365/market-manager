import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import Header from './../../components/Header/index';
import { SearchInput } from '../../components/Input';
import Card from '../../components/Card';
import styles from './styles';
import { Plus } from 'react-native-feather';
import theme from './../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import api from './../../services/api';
import ItemDetails from '../../components/ItemDetails';
import useItem from '../../hooks/useItem';

const Items = () => {

    const {
        items,
        setItems,
        isOpen,
        openModal,
        reloadItems,
        loading,
        setLoading
    } = useItem();

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState('');

    const searchResult = search ? searchResults : items;

    const { navigate } = useNavigation();
    
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
        reloadItems();
    }, [])

    useEffect(() => {
        if (search) {
            getSearchResults();
        }
    }, [search])

    return (
        <>
            {
                isOpen &&
                <ItemDetails />
            }
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
                                    item={item}
                                    style={styles.cardSize}
                                />
                            }
                        />
                }

                <TouchableOpacity
                    onPress={() => navigate('CreateItem')}
                    style={styles.floatButton}
                >
                    <Plus color={theme.colors.white} />
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Items;