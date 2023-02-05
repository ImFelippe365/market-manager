import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { MaskedText } from 'react-native-mask-text';
import cardPhoto from '../../assets/teste.jpg'
import useItem from '../../hooks/useItem';
import EmptyImage from '../EmptyImage';
import styles from './styles';

const Card = ({ item, soldOut = false, ...props }) => {
    const currentPriceStyle = soldOut ? {
        ...styles.price,
        ...styles.soldOutMode
    } : styles.price;

    const {
        openModal,
    } = useItem();

    return (
        <TouchableOpacity {...props} onPress={() => openModal(item)}>
            <View style={styles.imageContainer}>
                {
                    soldOut &&
                    <View style={styles.soldOut}>
                        <Text style={styles.soldOutText}>Esgotado</Text>
                    </View>
                }
                {
                    item.image ?
                        <Image
                            style={styles.cardImage}
                            source={{ uri: item.image }}
                            resizeMode='cover'
                        />
                        : <EmptyImage small />
                }
            </View>
            <View style={styles.content}>
                <Text numberOfLines={1} style={[styles.title, soldOut && styles.soldOutMode]}>{item.name}
                </Text>
                <View style={styles.descriptionContainer}>
                    <Text style={[styles.soldQuantity, soldOut && styles.soldOutMode]}>
                        {item.sold} vendidos
                    </Text>
                    <MaskedText
                        type="currency"
                        options={{
                            prefix: 'R$ ',
                            decimalSeparator: ',',
                            groupSeparator: '.',
                            precision: 2
                        }}
                        style={currentPriceStyle}
                    >
                        {item.price}
                    </MaskedText>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Card;