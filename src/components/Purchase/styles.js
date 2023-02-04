import { StyleSheet } from "react-native";
import theme from './../../styles/theme';

const styles = StyleSheet.create({
    purchaseContainer: {
        width: '100%',
        paddingHorizontal: -16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        borderBottomWidth: 0
    },

    whoPurchase: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    userImage: {
        backgroundColor: theme.colors.shadowPrimary,
        borderRadius: 64,
        padding: 8
    },

    userName: {
        fontFamily: theme.fonts.semiBold,
        color: theme.colors.black,
        marginLeft: 12
    },

    purchaseDetail: {
        flex: 2,
        fontFamily: theme.fonts.regular,
        color: theme.colors.gray,

    },
})

export default styles;