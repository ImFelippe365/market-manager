import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
    const auth = false;

    return (
        <NavigationContainer>
            {
                auth ? <AppRoutes />
                    : <AuthRoutes />
            }
        </NavigationContainer>
    );
}

export default Routes;