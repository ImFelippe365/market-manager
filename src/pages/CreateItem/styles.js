import { StyleSheet } from "react-native";
import theme from './../../styles/theme';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        padding: 18,
        paddingVertical: 0
    },

    title: {
        fontFamily: theme.fonts.bold,
        color: theme.colors.black,
        marginBottom: 16,
        fontSize: theme.sizes['xl']
    },

    inputSpacing: {
        marginBottom: 12
    },

    sendImageContainer: {
        backgroundColor: theme.colors.shadowPrimary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: theme.colors.primary,
        // aspectRatio: 16 / 9,
        height: 180,
        marginBottom: 18
    },

    sendImageContent: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    sendImageText: {
        fontFamily: theme.fonts.semiBold,
        fontSize: theme.sizes.base,
        color: theme.colors.primary,
        marginTop: 4,
    },

    itemImage: {
        width: '100%',
        height: 180,
        borderRadius: 12,
        marginBottom: 18
    },
})

export default styles;