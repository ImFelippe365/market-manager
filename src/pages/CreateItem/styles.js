import { StyleSheet } from "react-native";
import theme from "../../styles/theme";


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
})

export default styles;