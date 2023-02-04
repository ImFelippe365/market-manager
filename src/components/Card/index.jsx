import React from 'react';
import { Image, View, Text } from 'react-native';
import cardPhoto from '../../assets/teste.jpg'
import styles from './styles';

const Card = ({ name, sold, price, style, soldOut = false }) => {
    return (
        <View style={style}>
            <View style={styles.imageContainer}>
                {
                    soldOut &&
                    <View style={styles.soldOut}>
                        <Text style={styles.soldOutText}>Esgotado</Text>
                    </View>
                }
                <Image
                    style={styles.cardImage}
                    source={cardPhoto}
                    resizeMode='cover'
                />
            </View>
            <View style={styles.content}>
                <Text numberOfLines={1} style={[styles.title, soldOut && styles.soldOutMode]}>{name}</Text>
                <View style={styles.descriptionContainer}>
                    <Text style={[styles.soldQuantity, soldOut && styles.soldOutMode]}>{sold} vendidos</Text>
                    <Text style={[styles.price, soldOut && styles.soldOutMode]}>R$ {price}</Text>
                </View>
            </View>
        </View>
    );
}

export default Card;