import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: theme.colors.primary,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },

    buttonText: {
        fontFamily: theme.fonts.bold,
        color: theme.colors.white,
        fontSize: theme.sizes.md
    }
})

export default styles;