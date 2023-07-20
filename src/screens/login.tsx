import { VStack, Input, HStack, useTheme, Center, View, FormControl} from 'native-base';
import { useNavigation } from '@react-navigation/native';
// import { SignOut, ChatTeardropText } from 'phosphor-react-native';
// import Logo from '../assets/logo_secondary.svg';
import {Button} from '../components/Button';
import {Image, Platform, Alert, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import React, { useState } from 'react';
// import auth from '@react-native-firebase/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from '../../firebaseconfig';
import { initializeApp } from 'firebase/app';
import { useAuthentication  } from '../AuthenticationContext';
import * as LocalAuthentication from 'expo-local-authentication'

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function Login() {

  const { setIsAuthenticated } = useAuthentication();
  const { colors } = useTheme();
  const img = require('../assets/logop.png');

  const navigation = useNavigation();

  function telaCadastrar(){
    navigation.navigate('registration');
  }
  
  function telaInicio(){
    navigation.navigate('inicio');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Aqui você pode navegar para a próxima tela após o login bem-sucedido ou fazer outras ações necessárias.
      setIsAuthenticated(true)
      console.log('Usuário logado:', userCredential.user?.email);
      navigation.navigate('inicio'); // Ajuste o nome da tela 'inicio' conforme necessário
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
    }
  };

  return (
    
    <VStack flex={1} p={6} bg='white'>
            <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                pb={5}
                px={50}
            >
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
                onChangeText={setEmail}
            />
          </HStack>
          <HStack w="full" mb={4} justifyContent="space-between" alignItems="center">
          <Input
                placeholder="SENHA"
                mt={4}
                bg='cor4'
                onChangeText={setPassword}
            />
          </HStack>
          <HStack>
            <Button title="Acessar" w="full" bg="green.500" borderRadius={100} onPress={handleLogin}/>
          </HStack>
          <HStack>
            <Button mt={16}title="Cadastrar" w="full" bg="green.500" borderRadius={100} onPress={telaCadastrar}/>
            {/* <Button mt={80}title="Cadastrar" w="full" bg="cor1" borderRadius={100} onPress={telaCadastrar}/> */}
          </HStack>

          {/* botão de teste para tentar entrar na tela de inicio sem estar logado */}
          {/* <HStack>
            <Button mt={16}title="teste" w="full" bg="green.500" borderRadius={100} onPress={telaInicio}/>
        
          </HStack> */}

        </VStack>

    </VStack>
  );
}
