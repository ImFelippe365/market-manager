import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import styles from './styles';
import Header from './../../components/Header/index';
import { BarChart2, TrendingDown, TrendingUp } from 'react-native-feather';
import theme from './../../styles/theme';
import Card from './../../components/Card/index';
import Purchase from '../../components/Purchase';
import { DataTable } from 'react-native-paper';
import api from '../../services/api';
import useItem from '../../hooks/useItem';

const Dashboard = () => {

    const {
        topItems,
        loading,
        setLoading,
        reloadTopItems
    } = useItem();

    useEffect(() => {
        reloadTopItems()
    }, [])

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Dashboard</Text>

            <Text style={styles.subtitle}>Visão geral</Text>
            <View style={styles.overviewContainer}>
                <View style={styles.overviewItem}>
                    <TrendingDown color={theme.colors.danger} />
                    <Text style={[styles.overviewItemText, { color: theme.colors.danger }]}>Gastos</Text>
                    <Text style={styles.overviewItemAmount}>R$ 2.500,00</Text>
                </View>
                <View style={styles.overviewItem}>
                    <TrendingUp color={theme.colors.success} />
                    <Text style={[styles.overviewItemText, { color: theme.colors.success }]}>Lucros</Text>
                    <Text style={styles.overviewItemAmount}>R$ 24.500,00</Text>
                </View>
                <View style={styles.overviewItem}>
                    <BarChart2 color={theme.colors.primary} />
                    <Text style={[styles.overviewItemText, { color: theme.colors.primary }]}>Vendas</Text>
                    <Text style={styles.overviewItemAmount}>7000 vendas</Text>
                </View>
            </View>
            {
                topItems.length > 0 &&
                <>
                    <Text style={styles.subtitle}>Produtos mais vendidos</Text>
                    {
                        loading ?
                            <ActivityIndicator
                                style={{ paddingVertical: 50 }}
                                color={theme.colors.primary}
                            /> :
                            <FlatList
                                data={topItems}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) =>
                                    <Card
                                        item={item}
                                        sold={item.sold}
                                        disabled
                                        style={styles.cardSize}
                                    />
                                }
                            />
                    }
                </>
            }


            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Últimas vendas</Text>
                <Text style={styles.seeAll}>Ver todas</Text>
            </View>

            <DataTable style={styles.purchasesList}>
                <Purchase
                    userName="Breno"
                    amount="R$ 3.000,00"
                    date={"12/01/2023"}
                    status={"successful"}
                />
                <Purchase
                    userName="Felippe"
                    amount="R$ 10,00"
                    date={"13/01/2023"}
                    status={"failure"}
                />
                <Purchase
                    userName="José Neto"
                    amount="R$ 38.000,00"
                    date={"14/01/2023"}
                    status={"successful"}
                />
            </DataTable>



        </View>
    );
}

export default Dashboard;