import { VStack, Input, HStack, IconButton, useTheme, Center} from 'native-base';
import { SignOut, ChatTeardropText, House} from 'phosphor-react-native';
// import Logo from '../assets/logo_secondary.svg';
import {Button} from '../components/Button';
import {Image, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native'

//firebaseimport
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseconfig';



export function Registration() {

  const { colors } = useTheme();
  const img = require('../assets/logop.png');

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAcount = () => {
    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      alert('Conta criada com sucesso!!')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('login');
    })
    .catch(error => {
      console.log(email)
      console.log(error)
    })
  }

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
          <Input onChangeText={(novoEmail) => setEmail(novoEmail)} placeholder="CPF" mt={4} bg='cor4'/>
        </HStack>

        <HStack w="full"  justifyContent="space-between" alignItems="center">
          <Input placeholder="LOGIN" mt={4} bg='cor4'/>
        </HStack>
    
        <HStack w="full" mb={4} justifyContent="space-between" alignItems="center">
          <Input onChangeText={(novaSenha) => setSenha(novaSenha)} placeholder="SENHA" mt={4} bg='cor4'/>
        </HStack>

        <HStack w="full" mb={4} justifyContent="space-between" alignItems="center">
          <Input placeholder="CONFIRMAR SENHA" bg='cor4'/>
        </HStack>

        <HStack>
          <Button onPress={handleCreateAcount} title="Cadastrar" w="full" bg="cor1" borderRadius={100}/>
        </HStack>

        <HStack mt={230}>
          <Button title="Login" w="full" bg="cor1" borderRadius={100} onPress={telaLogin}/>
        </HStack>

      </VStack>

    </VStack>
  );
}