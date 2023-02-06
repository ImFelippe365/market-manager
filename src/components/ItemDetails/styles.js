import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 18,
        backgroundColor: '#00000099'
    },

    modalContainer: {
        backgroundColor: theme.colors.white,
        borderRadius: 12,
    },

    imageContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },

    cardImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 16 / 9,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    },

    category: {
        color: theme.colors.gray,
        fontSize: theme.sizes.base,
        fontFamily: theme.fonts.regular
    },

    name: {
        color: theme.colors.black,
        fontSize: theme.sizes.xl,
        fontFamily: theme.fonts.bold
    },

    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    descriptionContainer: {
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 24,
    },

    price: {
        color: theme.colors.primary,
        fontSize: theme.sizes.base,
        fontFamily: theme.fonts.semiBold
    },

    sold: {
        color: theme.colors.black,
        fontSize: theme.sizes.base,
        fontFamily: theme.fonts.regular
    },

    closeModal: {
        position: 'absolute',
        zIndex: 99,
        top: 16,
        right: 16,
        backgroundColor: theme.colors.shadow,
        borderRadius: 64,
        padding: 2
    },

    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 18
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 32,
    },

    editButtonText: {
        fontFamily: theme.fonts.semiBold,
        color: theme.colors.primary,
        fontSize: theme.sizes.base,
        marginLeft: 8,
    },

    deleteButtonText: {
        fontFamily: theme.fonts.semiBold,
        color: theme.colors.danger,
        fontSize: theme.sizes.base,
        marginLeft: 8,
    },
})

export default styles;