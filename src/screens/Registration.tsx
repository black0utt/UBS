import { VStack, Input, HStack, IconButton, useTheme, Center} from 'native-base';
import { SignOut, ChatTeardropText, House} from 'phosphor-react-native';
// import Logo from '../assets/logo_secondary.svg';
import {Button} from '../components/Button';
import {Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'
export function Registration() {

  const { colors } = useTheme();
  const img = require('../assets/logop.png');

  const navigation = useNavigation();
  function telaLogin(){
    navigation.navigate('login');
  }
  return (

    <VStack flex={1} p={6} bg='white'>

      <HStack w="full" justifyContent="space-between" alignItems="center" pb={5} px={50}>
        <Center>
          <Image source={img} />
        </Center>
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />}/>
      </HStack>
    
      <VStack flex={1} px={6}>

        <HStack w="full" justifyContent="space-between" alignItems="center">
          <Input placeholder="CPF" mt={4} bg='cor4'/>
        </HStack>

        <HStack w="full"  justifyContent="space-between" alignItems="center">
          <Input placeholder="LOGIN" mt={4} bg='cor4'/>
        </HStack>
    
        <HStack w="full" mb={4} justifyContent="space-between" alignItems="center">
          <Input placeholder="SENHA" mt={4} bg='cor4'/>
        </HStack>

        <HStack w="full" mb={4} justifyContent="space-between" alignItems="center">
          <Input placeholder="CONFIRMAR SENHA" bg='cor4'/>
        </HStack>

        <HStack>
          <Button title="Cadastrar" w="full" bg="cor1" borderRadius={100}/>
        </HStack>

        <HStack mt={230}>
          <Button title="Login" w="full" bg="cor1" borderRadius={100} onPress={telaLogin}/>
        </HStack>

      </VStack>

    </VStack>
  );
}