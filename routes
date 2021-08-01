import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/home';
import Details from '../pages/details';
import Register from '../pages/register';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Lista' ,
                        headerTintColor: "#F92E6A",
                    }}
                />

                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{
                        title: 'Atualizar',
                        headerTintColor: "#F92E6A",
                    }}
                />

                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        title: 'Adicionar',
                        headerTintColor: "#F92E6A",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

