import { StyleSheet } from "react-native";
import theme from '../../styles/theme';

const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: theme.colors.lightgray,
        borderWidth: 1,
        paddingHorizontal: 14,
        height: 40,
        width: '100%',
        minWidth: 340,
        fontFamily: theme.fonts.regular,
        color: theme.colors.gray
    },

    label: {
        fontFamily: theme.fonts.semiBold,
        color: theme.colors.gray,
        marginBottom: 6,
        textAlign: 'flex-start'
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: theme.colors.lightgray,
        borderWidth: 1,
        paddingHorizontal: 14,
        height: 40,
        minWidth: 340,
        fontFamily: theme.fonts.regular,
        color: theme.colors.gray
    },

    inputContent: {
        width: '100%'
    }
})

export default styles;