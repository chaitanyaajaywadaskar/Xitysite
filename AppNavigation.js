import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CustomAppBar from './screens/CustomAppBar';
import LoaderScreen from './screens/LoaderScreen';
import LeftDrawerNavigation from './screens/DrawerNavigation';
import PartnerManagerScreen from './screens/PartnerManagerScreen';
import LegalDash from './screens/LegalDash';



const Stack = createNativeStackNavigator();


const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator id='stack_nav' initialRouteName='Load'>
                <Stack.Screen
                    name="Load"
                    component={LoaderScreen}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: true, header: CustomAppBar }}
                /> */}
                <Stack.Screen
                    name="Drawer"
                    component={LeftDrawerNavigation}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name="Legal"
                    component={LegalDash}
                    options={{ headerShown: false }}
                /> */}

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation