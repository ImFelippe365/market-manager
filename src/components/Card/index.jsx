import React from 'react';
import { Image, View, Text } from 'react-native';
import { MaskedText } from 'react-native-mask-text';
import cardPhoto from '../../assets/teste.jpg'
import styles from './styles';

const Card = ({ name, sold, price, image, style, soldOut = false }) => {
    const currentPriceStyle = soldOut ? {
        ...styles.price,
        ...styles.soldOutMode
    } : styles.price

    return (
        <View style={style}>
            <View style={styles.imageContainer}>
                {
                    soldOut &&
                    <View style={styles.soldOut}>
                        <Text style={styles.soldOutText}>Esgotado</Text>
                    </View>
                }
                {
                    image ?
                        <Image
                            style={styles.cardImage}
                            source={{ uri: image }}
                            resizeMode='cover'
                        />
                        : <Image
                            style={styles.cardImage}
                            source={cardPhoto}
                            resizeMode='cover'
                        />
                }
            </View>
            <View style={styles.content}>
                <Text numberOfLines={1} style={[styles.title, soldOut && styles.soldOutMode]}>{name}</Text>
                <View style={styles.descriptionContainer}>
                    <Text style={[styles.soldQuantity, soldOut && styles.soldOutMode]}>{sold} vendidos</Text>
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
                        {price}
                    </MaskedText>
                </View>
            </View>
        </View>
    );
}

export default Card;