import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from './../pages/Dashboard/index';
import Profile from './../pages/Profile/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppRoutes = () => {

    const TabNavigation = () =>
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={Dashboard} />
            {/* <Tab.Screen name="Items" component={SettingsScreen} /> */}
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={TabNavigation} />
        </Stack.Navigator>
    );
}

export default AppRoutes;