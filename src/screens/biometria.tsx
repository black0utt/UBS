import { HStack, VStack, useTheme, Text, Center} from "native-base";
import React from 'react';
import { Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {Button} from '../components/Button';

export function Biometria() {

    const navigation = useNavigation();

    const { colors } = useTheme();
    const img = require('../assets/logop.png');

    function telaLogin(){
        navigation.navigate('login');
      }


    return (

        <VStack flex={1} p={6} bg='cor1'>
            <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                pb={5}
                px={50}
            >
                {/* <Logo />
                <IconButton
                    icon={<SignOut size={26} color={colors.gray[300]} />}
                /> */}
                <Center>
                <Image source={img} />
                </Center>
            </HStack>
            <VStack>
                <HStack>
                    <Button mt={16} title="Testar biometria" w="full" bg="green.500" borderRadius={100} onPress={telaLogin}/>
                </HStack>
            </VStack>
        </VStack>

    )

}