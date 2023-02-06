const { StyleSheet, Dimensions } = require("react-native");
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

    searchBar: {
        marginBottom: 16
    },

    itemsList: {
        flex: 1,
    },

    itemsContainer: {
        paddingBottom: 40
    },

    itemColumns: {
        justifyContent: 'space-between'
    },

    cardSize: {
        marginTop: 16,
        width: Dimensions.get('screen').width / 2.3,
    },

    floatButton: {
        backgroundColor: theme.colors.primary,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 64,
        right: 20,
        bottom: 10,
        elevation: 2
    },

    emptyItems: {
        fontSize: theme.sizes.xs,
        color: theme.colors.gray,
        fontFamily: theme.fonts.regular,
        textAlign: 'center'
    }
})

export default styles;