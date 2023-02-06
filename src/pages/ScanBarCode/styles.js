import { Dimensions, StyleSheet } from "react-native";
import theme from "../../styles/theme";

const positionTopOrEnd = Dimensions.get('screen').width / 6 - 4
const positionLeftOrRight = Dimensions.get('screen').width / 3 - 4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        position: 'relative'
    },

    solidRow: {
        backgroundColor: theme.colors.shadow,
        height: Dimensions.get('screen').width / 6,
        width: '100%'
    },

    columnsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
    },

    solidColumn: {
        height: '100%',
        width: Dimensions.get('screen').width / 3,
        backgroundColor: theme.colors.shadow,
    },

    bordersContainerTopLeft: {
        position: 'absolute',
        top: positionTopOrEnd,
        left: positionLeftOrRight,
        zIndex: 99,
    },

    bordersContainerBottomLeft: {
        position: 'absolute',
        bottom: positionTopOrEnd,
        left: positionLeftOrRight,
        zIndex: 99,
        transform: [{ rotateZ: '270deg' }]
    },

    bordersContainerTopRight: {
        position: 'absolute',
        top: positionTopOrEnd,
        right: positionLeftOrRight,
        zIndex: 99,
        transform: [{ rotateZ: '90deg' }]
    },

    bordersContainerBottomRight: {
        position: 'absolute',
        bottom: positionTopOrEnd,
        right: positionLeftOrRight,
        zIndex: 99,
        transform: [{ rotateZ: '180deg' }]
    },

    bordersContainerTopMiddle: {
        position: 'absolute',
        top: Dimensions.get('screen').height / 2 - 40,
        bottom: Dimensions.get('screen').height / 2 - 40,
        right: positionLeftOrRight,
        zIndex: 99,
    },

    bordersContainerBottomMiddle: {
        position: 'absolute',
        top: Dimensions.get('screen').height / 2 - 40,
        bottom: Dimensions.get('screen').height / 2 - 40,
        left: positionLeftOrRight,
        zIndex: 99,
    },

    borderVertical: {
        borderRadius: 16,
        width: 8,
        height: 40,
        backgroundColor: theme.colors.white,
        marginTop: -8,
        zIndex: 99
    },

    borderHorizontal: {
        borderRadius: 16,
        width: 40,
        height: 8,
        backgroundColor: theme.colors.white,
        zIndex: 99
    },

    line: {
        height: '100%',
        width: 1,
        backgroundColor: theme.colors.danger
    },

    informationMessageContainer: {
        borderRadius: 12,
        backgroundColor: theme.colors.black,
        width: 220,
        height: 40,
        position: 'absolute',
        zIndex: 99,
        top: Dimensions.get('screen').height / 2 - 30,
        bottom: Dimensions.get('screen').height / 2 - 30,
        left: positionLeftOrRight + 80,
        transform: [{ rotateZ: '90deg' }],
        justifyContent: 'center',
        alignItems: 'center'
    },

    informationMessageText: {
        color: theme.colors.white,
        fontFamily: theme.fonts.bold,
        fontSize: theme.sizes.base
    },

    backButtonContainer: {
        borderRadius: 24,
        backgroundColor: theme.colors.primary,
        width: 100,
        height: 40,
        position: 'absolute',
        zIndex: 99,
        top: Dimensions.get('screen').height / 2 - 25,
        bottom: Dimensions.get('screen').height / 2 - 25,
        right: positionLeftOrRight + 150,
        transform: [{ rotateZ: '90deg' }],
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default styles;