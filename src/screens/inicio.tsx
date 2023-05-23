import { VStack, Input, HStack, useTheme, Center, IconButton} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
// import { SignOut, ChatTeardropText } from 'phosphor-react-native';
// import Logo from '../assets/logo_secondary.svg';
import {Button} from '../components/Button';
import {Image, SafeAreaView} from 'react-native';
import React from 'react';
export function Inicio() {



    const { colors } = useTheme();
    const img = require('../assets/logop.png');

    const navigation = useNavigation();

    function logout(){
        navigation.navigate('login')
    }


  return (
    
    
    <VStack flex={1} p={6} pt={20} bg='white'>
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
            <IconButton icon={<AntDesign name="logout" size={24} color={colors.gray[300]} onPress={logout}/>}/>
        </HStack>

        <VStack flex={1} px={4}>
          <HStack w="full" mt={150} justifyContent="space-between" alignItems="center">
            <Button title="Solicitar atendimento" w="full" bg="green.500" borderRadius={100}/>
          </HStack>
          <HStack w="full" mt={4} justifyContent="space-between" alignItems="center">
            <Button title="Listar Atendimentos" w="full" bg="green.500" borderRadius={100}/>
          </HStack>
        </VStack>
    </VStack>
  );
}