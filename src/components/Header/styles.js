import { StyleSheet } from "react-native";
import Constants from 'expo-constants';
import theme from "../../styles/theme";

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        height: 50,
        backgroundColor: theme.colors.lightgray
    }
})

export default styles;