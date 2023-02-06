import { StyleSheet } from "react-native";
import theme from './../../styles/theme';


const styles = StyleSheet.create({

    content: {
        flex: 0,
        backgroundColor: theme.colors.white,
        borderBottomEndRadius: 12,
        borderBottomLeftRadius: 12,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: theme.colors.lightgray,
        paddingHorizontal: 12,
        paddingTop: 8,
        paddingBottom: 16,
        width: '100%'
    },

    imageContainer: {
        position: 'relative'
    },

    soldOut: {
        backgroundColor: theme.colors.shadow,
        width: '100%',
        height: undefined,
        aspectRatio: 16 / 9,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99
    },

    soldOutText: {
        fontFamily: theme.fonts.semiBold,
        fontSize: theme.sizes.base,
        color: theme.colors.white
    },

    soldOutMode: {
        color: theme.colors.lightgray
    },

    cardImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 16 / 9,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    },

    title: {
        color: theme.colors.black,
        fontFamily: theme.fonts.bold,
        fontSize: theme.sizes.base
    },

    descriptionContainer: {
        marginTop: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    soldQuantity: {
        color: theme.colors.black,
        fontFamily: theme.fonts.regular,
        fontSize: theme.sizes.xs
    },

    price: {
        color: theme.colors.primary,
        fontFamily: theme.fonts.bold,
        fontSize: theme.sizes.xs
    },
})

export default styles;