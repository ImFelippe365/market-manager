import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity, Touchable } from 'react-native';
import { MaskedText } from 'react-native-mask-text';

import styles from './styles';
import useItem from './../../hooks/useItem';
import EmptyImage from '../EmptyImage';
import { Edit, Trash2, X } from 'react-native-feather';
import theme from './../../styles/theme';
import { useNavigation } from '@react-navigation/native';

const ItemDetails = () => {

    const {
        isOpen,
        itemDetails,
        deleteItem,
        closeModal,
    } = useItem();

    const { navigate } = useNavigation();

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isOpen}
            onRequestClose={closeModal}
        >
            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity style={styles.closeModal} onPress={closeModal}>
                            <X width={18} height={18} color={theme.colors.white} />
                        </TouchableOpacity>
                        {
                            itemDetails.image ?
                                <Image
                                    style={styles.cardImage}
                                    source={{ uri: itemDetails.image }}
                                    resizeMode='cover'
                                />
                                : <EmptyImage />
                        }
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.category}>{itemDetails.category}</Text>
                        <Text style={styles.name}>{itemDetails.name}</Text>
                        <View style={styles.rowContainer}>
                            <Text style={styles.sold}>{itemDetails.sold} vendas</Text>
                            <MaskedText
                                type="currency"
                                options={{
                                    prefix: 'R$ ',
                                    decimalSeparator: ',',
                                    groupSeparator: '.',
                                    precision: 2
                                }}
                                style={styles.price}
                            >
                                {itemDetails.price}
                            </MaskedText>
                        </View>
                        <View style={styles.actionsContainer}>
                            <TouchableOpacity
                                onPress={() => {
                                    closeModal();
                                    navigate('CreateItem');
                                }}
                                style={styles.button}
                            >
                                <Edit color={theme.colors.primary} />
                                <Text style={styles.editButtonText}>Editar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={deleteItem}
                                style={styles.button}
                            >
                                <Trash2 color={theme.colors.danger} />
                                <Text style={styles.deleteButtonText}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default ItemDetails;