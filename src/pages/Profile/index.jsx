import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Edit, Edit2, FileText, LogOut, Shield } from 'react-native-feather';
import theme from '../../styles/theme';

import styles from './styles';

const Profile = () => {



    return (
        <View style={styles.container}>
            <View style={styles.userImageContainer}>
                <TouchableOpacity style={styles.imageEditButton}>
                    <Edit2 width={16} height={16} color={theme.colors.white} />
                </TouchableOpacity>
                {
                    false ? <Image style={styles.userImage} /> :
                        <View style={[styles.userImage, { backgroundColor: 'black' }]} />
                }
            </View>
            <Text style={styles.userName}>
                Felippe Rian
            </Text>
            <Text style={styles.userEstablishment}>
                Mercado sem irmãos
            </Text>

            <View style={styles.userConfig}>
                <TouchableOpacity style={styles.configOption}>
                    <Edit color={theme.colors.black} width={24} height={24} />
                    <Text style={styles.configLabel}>Editar perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.configOption}>
                    <Shield color={theme.colors.black} width={24} height={24} />
                    <Text style={styles.configLabel}>Política de privacidade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.configOption}>
                    <FileText color={theme.colors.black} width={24} height={24} />
                    <Text style={styles.configLabel}>Termos e condições</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.configOption}>
                    <LogOut color={theme.colors.danger} width={24} height={24} />
                    <Text style={[styles.configLabel, { color: theme.colors.danger }]}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Profile;