import React from 'react';
import { FlatList, Text, View } from 'react-native';

import styles from './styles';
import Header from './../../components/Header/index';
import { BarChart2, TrendingDown, TrendingUp } from 'react-native-feather';
import theme from './../../styles/theme';
import Card from './../../components/Card/index';
import Purchase from '../../components/Purchase';
import { DataTable } from 'react-native-paper';

const Dashboard = () => {

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
            <Text style={styles.subtitle}>Produtos mais vendidos</Text>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) =>
                    <Card
                        name={"Macarrão"}
                        sold={0}
                        price={'2,00'}
                        style={styles.cardSize}
                    />
                }
            />
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Últimas vendas</Text>
                <Text style={styles.seeAll}>Ver todas</Text>
            </View>

            <DataTable style={styles.purchasesList}>
                <Purchase
                    userName="Breno"
                    amount="R$ 3.000,00"
                    date={"12/01/2023"}
                    status={"sucessfull"}
                />
                <Purchase
                    userName="Felippe"
                    amount="R$ 3.000,00"
                    date={"12/01/2023"}
                    status={"sucessfull"}
                />
                <Purchase
                    userName="Breno"
                    amount="R$ 3.000,00"
                    date={"12/01/2023"}
                    status={"sucessfull"}
                />
            </DataTable>



        </View>
    );
}

export default Dashboard;