import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from './../pages/Dashboard/index';
import Profile from './../pages/Profile/index';
import theme from './../styles/theme';
import { Archive, PieChart, User } from 'react-native-feather';
import Items from './../pages/Items/index';
import CreateItem from './../pages/CreateItem/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppRoutes = () => {

    const TabNavigation = () =>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.colors.white,
                    elevation: 0,
                    borderWidth: 0,
                    height: 70,
                    borderTopWidth: 0
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.gray,
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ color }) =>
                        <PieChart color={color} fill={color + '20'} />
                }}
            />
            <Tab.Screen
                name="Items"
                component={Items}
                options={{
                    tabBarIcon: ({ color }) =>
                        <Archive color={color} fill={color + '20'} />,
                    unmountOnBlur: true
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, focused }) =>
                        <User color={color} fill={color + '20'} />,
                }}
            />
        </Tab.Navigator>

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={TabNavigation} />
            <Stack.Screen name="CreateItem" component={CreateItem} />
        </Stack.Navigator>
    );
}

export default AppRoutes;