import React from 'react';
import { View } from 'react-native';
import AppRoutes from './app.routes';

// import { Container } from './styles';

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