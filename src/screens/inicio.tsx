import { VStack, Input, HStack, useTheme, Center, IconButton} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
// import { SignOut, ChatTeardropText } from 'phosphor-react-native';
// import Logo from '../assets/logo_secondary.svg';
import {Button} from '../components/Button';
import {Image, SafeAreaView} from 'react-native';
import React from 'react';
import { useAuthentication  } from '../AuthenticationContext';
export function Inicio() {


    const { isAuthenticated, logout } = useAuthentication();
    const { colors } = useTheme();
    const img = require('../assets/logop.png');

    const navigation = useNavigation();

    function handleLogout(){
      alert('Usuário deslogado')
      navigation.navigate('login')
    }
    function cadastrarAtend(){
      navigation.navigate('solicitarAtendimento')
    }
    function listarAtend(){
      navigation.navigate('listarAtendimento')
    }

    if (!isAuthenticated) {
      // Redirecionar para a tela de login, caso o usuário não esteja autenticado
      alert('Você precisa estar logado em uma conta para conseguir acessar esse conteúdo')
      navigation.navigate('login');
      return null; // Retorna null para evitar renderizar a tela 'Inicio'
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
            <IconButton icon={<AntDesign name="logout" size={24} color={colors.gray[300]} onPress={handleLogout}/>}/>
        </HStack>

        <VStack flex={1} px={4}>
          <HStack w="full" mt={150} justifyContent="space-between" alignItems="center">
            <Button title="Solicitar atendimento" w="full" bg="green.500" borderRadius={100} onPress={cadastrarAtend}/>
          </HStack>
          <HStack w="full" mt={4} justifyContent="space-between" alignItems="center">
            <Button title="Listar Atendimentos" w="full" bg="green.500" borderRadius={100} onPress={listarAtend}/>
          </HStack>
        </VStack>
    </VStack>
  );
}