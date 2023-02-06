import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera, CameraType } from 'expo-camera';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import useItem from '../../hooks/useItem';

import styles from './styles';


const ScanBarCode = () => {

    const [permission, requestPermission] = Camera.useCameraPermissions();

    const { goBack } = useNavigation();
    const {
        setItemBarCode
    } = useItem();
    // if (!permission) ...

    // if (!permission.granted) ...

    return (
        <View style={styles.container}>
            <View style={styles.bordersContainerTopRight}>
                <View style={styles.borderHorizontal} />
                <View style={styles.borderVertical} />
            </View>

            <View style={styles.bordersContainerTopLeft}>
                <View style={styles.borderHorizontal} />
                <View style={styles.borderVertical} />
            </View>

            <View style={styles.bordersContainerBottomLeft}>
                <View style={styles.borderHorizontal} />
                <View style={styles.borderVertical} />
            </View>

            <View style={styles.bordersContainerBottomRight}>
                <View style={styles.borderHorizontal} />
                <View style={styles.borderVertical} />
            </View>

            <View style={styles.bordersContainerTopMiddle}>
                <View style={[styles.borderVertical, { height: 80 }]} />
            </View>

            <View style={styles.bordersContainerBottomMiddle}>
                <View style={[styles.borderVertical, { height: 80 }]} />
            </View>

            <View style={styles.informationMessageContainer}>
                <Text style={styles.informationMessageText}>
                    Centralize o código de barras
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => goBack()}
                style={styles.backButtonContainer}
            >
                <Text style={styles.informationMessageText}>
                    Voltar
                </Text>
            </TouchableOpacity>

            <Camera
                barCodeScannerSettings={{
                    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                }}
                onBarCodeScanned={(barCode) => {
                    setItemBarCode(barCode.data);
                    goBack();
                }}
                ratio={'16:9'}
                style={styles.camera}
                type={CameraType.back}
            >
                <View style={styles.solidRow} />
                <View style={styles.columnsContainer}>
                    <View style={styles.solidColumn} />
                    <View style={styles.line} />
                    <View style={styles.solidColumn} />
                </View>
                <View style={styles.solidRow} />
            </Camera>
        </View>
    );
}

export default ScanBarCode;