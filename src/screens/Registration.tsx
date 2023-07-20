import { VStack, Input, HStack, IconButton, useTheme, Center, FlatList, View} from 'native-base';
import { SignOut, ChatTeardropText, House} from 'phosphor-react-native';
// import Logo from '../assets/logo_secondary.svg';
import {Button} from '../components/Button';
import {Image, ListRenderItemInfo, Text, TextInput} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native'


//firebaseimport
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseconfig';
import { collection, doc, getFirestore, setDoc, getDocs, query, getDoc, Firestore } from "firebase/firestore"; 



export function Registration() {

  const { colors } = useTheme();
  const img = require('../assets/logop.png');

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [confirmaSenha, setConfirmaSenha] = useState<string>('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);


  
  const handleCreateAcount = async () => {
    if (senha == confirmaSenha){
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
  
      const usuarios = collection(db, "usuarios");
        setDoc(doc(usuarios, email), {
        login: login,
        senha: senha});
    } else {
      alert('teste')
      senha == ""
    }

    
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
      </HStack>
    
      <VStack flex={1} px={6}>

        <HStack w="full" justifyContent="space-between" alignItems="center">
          <Input onChangeText={(novoEmail) => setEmail(novoEmail)} placeholder="EMAIL" mt={4} bg='cor4'/>
        </HStack>

        <HStack w="full"  justifyContent="space-between" alignItems="center">
          <Input onChangeText={(novoLogin) => setLogin(novoLogin)} placeholder="LOGIN" mt={4} bg='cor4'/>
        </HStack>
    
        <HStack w="full" mb={4} justifyContent="space-between" alignItems="center">
          <Input onChangeText={(novaSenha) => setSenha(novaSenha)} placeholder="SENHA" mt={4} bg='cor4' type='password'/>
        </HStack>

        <HStack w="full" mb={4} justifyContent="space-between" alignItems="center">
          <Input placeholder="CONFIRMAR SENHA" bg='cor4' onChangeText={(confirmaSenha) => setConfirmaSenha(confirmaSenha)} type='password'/>
        </HStack>
        
        <HStack>
          <Button onPress={handleCreateAcount} title="Cadastrar" w="full" bg="green.500" borderRadius={100}/>
        </HStack>

        <HStack mt={230}>
          <Button title="Login" w="full" bg="green.500" borderRadius={100} onPress={telaLogin}/>
        </HStack>

      </VStack>

    </VStack>
  );
}