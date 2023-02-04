import React from 'react';
import { View, Text } from 'react-native';
import { Check, User, X } from 'react-native-feather';

import { DataTable } from 'react-native-paper';

import styles from './styles';
import theme from './../../styles/theme';

const Purchase = ({ userName, amount, date, status }) => {
    return (
        <DataTable.Row style={styles.purchaseContainer}>
            <DataTable.Cell style={{ flex: 3 }}>
                <View style={styles.whoPurchase}>
                    <View style={styles.userImage}>
                        <User color={theme.colors.primary} />
                    </View>
                    <Text style={styles.userName}>{userName}</Text>
                </View>

            </DataTable.Cell>
            <DataTable.Cell style={styles.purchaseDetail}>
                <Text style={styles.purchaseDetail}>{amount}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.purchaseDetail}>
                <Text style={styles.purchaseDetail}>{date}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 0, justifyContent: 'flex-end' }}>
                {
                    status === 'sucessfull' ? <Check color={theme.colors.success} /> :
                        <X color={theme.colors.danger} />
                }
            </DataTable.Cell>
        </DataTable.Row>
    );
}

export default Purchase;