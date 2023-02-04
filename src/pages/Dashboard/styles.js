import { Dimensions, StyleSheet } from "react-native";
import theme from "../../styles/theme";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
        paddingTop: 0,
        width: '100%',
        backgroundColor: theme.colors.white
    },

    title: {
        fontFamily: theme.fonts.bold,
        color: theme.colors.black,
        marginBottom: 16,
        fontSize: theme.sizes['xl']
    },

    subtitle: {
        fontFamily: theme.fonts.bold,
        color: theme.colors.primary,
        marginBottom: 16,
        fontSize: theme.sizes['lg']
    },

    overviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
        paddingHorizontal: 12
    },

    overviewItem: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    overviewItemText: {
        fontFamily: theme.fonts.semiBold,
    },

    overviewItemAmount: {
        color: theme.colors.gray,
        fontSize: theme.sizes.xs,
        marginTop: 6
    },

    cardSize: {
        height: 100,
        marginTop: 16,
        width: Dimensions.get('screen').width / 2.1,
        marginRight: 8,
    },

    subtitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    seeAll: {
        fontFamily: theme.fonts.semiBold,
        fontSize: theme.sizes.md,
        color: theme.colors.secondary,
        marginBottom: 16
    },

    purchasesList: {
        flex: 3,
        width: '100%',
        marginHorizontal: 'auto'

    },

})

export default styles;