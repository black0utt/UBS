import { VStack, Input, HStack, useTheme, Center} from 'native-base';
import { useNavigation } from '@react-navigation/native';
// import { SignOut, ChatTeardropText } from 'phosphor-react-native';
// import Logo from '../assets/logo_secondary.svg';
import {Button} from '../components/Button';
import {Image} from 'react-native';
import React from 'react';
export function Login() {

  const { colors } = useTheme();
  const img = require('../assets/logop.png');

  const navigation = useNavigation();
  function telaCadastrar(){
    navigation.navigate('registration');
  }
  return (
    <VStack flex={1} p={6} bg='white'>
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

        <VStack flex={1} px={6}>
          <HStack w="full" mt={8} justifyContent="space-between" alignItems="center">

          <Input          
                placeholder="LOGIN"
                mt={4}
                bg='cor4'
            />
          </HStack>
          <HStack w="full" mb={4} justifyContent="space-between" alignItems="center">
          <Input
                
                placeholder="SENHA"
                mt={4}
                bg='cor4'
            />
          </HStack>
          <HStack>
            <Button title="Acessar" w="full" bg="cor1" borderRadius={100}/>
          </HStack>
          <HStack>
            <Button mt={80}title="Cadastrar" w="full" bg="cor1" borderRadius={100} onPress={telaCadastrar}/>
          </HStack>

        </VStack>


    </VStack>
  );
}