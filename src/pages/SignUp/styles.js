import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
    container: {
        padding: 18,
        paddingTop: 0
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

    termsMessage: {
        color: theme.colors.gray,
        marginBottom: 24,
    },

    termsHighlight: {
        color: theme.colors.primary,
        fontFamily: theme.fonts.semiBold
    },

    emailAvaliableContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -4,
        marginBottom: 16
    },

    emailAvaliableText: {
        fontFamily: theme.fonts.semiBold,
        marginLeft: 4,
        fontSize: theme.sizes.xs
    },
})

export default styles;