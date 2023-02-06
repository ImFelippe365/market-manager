import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import useAuth from "../hooks/useAuth";
import api from './../services/api';


const ItemContext = createContext({});

const ItemProvider = ({ children }) => {

    const { user } = useAuth(); 

    const [items, setItems] = useState([]);
    const [topItems, setTopItems] = useState([]);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [itemDetails, setItemDetails] = useState();
    const [itemsLoading, setItemsLoading] = useState(true);
    const [itemBarCode, setItemBarCode] = useState();

    const onOpenModal = (item) => {
        setItemDetails(item)
        setShowDetailsModal(true);
    }

    const onCloseModal = () => {
        setShowDetailsModal(false)
    }

    const onDeleteItem = async () => {
        try {
            Alert.alert(
                "Excluir item?",
                "Tem certeza que deseja remover este item?",
                [
                    {
                        text: 'Não'
                    },
                    {
                        text: 'Sim',
                        onPress: async () => {
                            await api.delete(`items/${itemDetails.id}`);
                            Alert.alert('Sucesso!', 'Este item foi excluido com êxito');
                            onCloseModal();
                            getItems()
                        }
                    }
                ]
            )
        } catch (err) {
            console.warn(err)
            Alert.alert('Erro', 'Houve um erro ao tentar excluir este item')
        }

    }

    const onClearItem = () => {
        setItemDetails(undefined);
        setItemBarCode(undefined);
    }

    const getItems = async () => {
        const { data } = await api.get(`items?user_id=${user.id}`)
        setItems(data);
        setItemsLoading(false);
    }

    const getTopItems = async () => {
        const { data } = await api.get(`items?user_id=${user.id}&_sort=sold&_order=desc&_limit=3`)
        setTopItems(data)
        setItemsLoading(false);
    }

    return (
        <ItemContext.Provider
            value={{
                items,
                setItems,
                itemDetails,
                openModal: onOpenModal,
                closeModal: onCloseModal,
                isOpen: showDetailsModal,
                deleteItem: onDeleteItem,
                clearItem: onClearItem,
                reloadItems: getItems,
                loading: itemsLoading,
                setLoading: setItemsLoading,
                topItems,
                reloadTopItems: getTopItems,
                itemBarCode,
                setItemBarCode
            }}
        >
            {children}
        </ItemContext.Provider>
    )
}

export { ItemContext, ItemProvider }