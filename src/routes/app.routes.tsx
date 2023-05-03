import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {Login} from '../screens/login'
import {Registration} from '../screens/Registration';
import {Inicio} from '../screens/inicio';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name="login" component={Login}/>
            <Screen name="registration" component={Registration}/>
            <Screen name="inicio" component={Inicio}/>
        </Navigator>
        
    )
}