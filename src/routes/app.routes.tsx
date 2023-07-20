import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {Login} from '../screens/login'
import {Registration} from '../screens/Registration';
import {Inicio} from '../screens/inicio';
import {Biometria} from '../screens/biometria';
import {SolicitarAtendimento} from '../screens/solicitarAtendimento';
import {ListarAtendimento} from '../screens/listarAtendimento';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            {/* <Screen name="biometria" component={Biometria}/> */}
            <Screen name="registration" component={Registration}/>
            <Screen name="login" component={Login}/>
            <Screen name="inicio" component={Inicio}/>
            <Screen name="solicitarAtendimento" component={SolicitarAtendimento}/>
            <Screen name="listarAtendimento" component={ListarAtendimento}/>

        </Navigator>
        
    )
}