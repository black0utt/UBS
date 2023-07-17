import { VStack, Input, HStack, useTheme, Center, View, FormControl} from 'native-base';
import { useNavigation } from '@react-navigation/native';
// import { SignOut, ChatTeardropText } from 'phosphor-react-native';
// import Logo from '../assets/logo_secondary.svg';
import {Button} from '../components/Button';
import {Image, Platform, Alert, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import React, { useState } from 'react';

import * as LocalAuthentication from 'expo-local-authentication'
export function Login() {

  const { colors } = useTheme();
  const img = require('../assets/logop.png');

  const navigation = useNavigation();

  // const Example = () => {
  //   const [showModal, setShowModal] = useState(false);
  //   return <Center>
  //       <Button onPress={() => setShowModal(true)} title={''}>Button</Button>
  //       <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
  //         <Modal.Content maxWidth="400px">
  //           <Modal.CloseButton />
  //           <Modal.Header>Contact Us</Modal.Header>
  //           <Modal.Body>
  //             <FormControl>
  //               <FormControl.Label>Name</FormControl.Label>
  //               <Input />
  //             </FormControl>
  //             <FormControl mt="3">
  //               <FormControl.Label>Email</FormControl.Label>
  //               <Input />
  //             </FormControl>
  //           </Modal.Body>
  //           <Modal.Footer>

  //               <Button variant="ghost" colorScheme="blueGray" onPress={() => {
  //               setShowModal(false);
  //             } } title={''}>
  //                 Cancel
  //               </Button>
  //               <Button onPress={() => {
  //               setShowModal(false);
  //             } } title={''}>
  //                 Save
  //               </Button>

  //           </Modal.Footer>
  //         </Modal.Content>
  //       </Modal>
  //     </Center>;
  // };

  async function authenticate(){
    const hasPassword = await LocalAuthentication.isEnrolledAsync();

    if(!hasPassword) return;

    const { success } = await LocalAuthentication.authenticateAsync();

    if (success) {
      Alert.alert('Autenticação realizada com sucesso')
      navigation.navigate('inicio')
    } else {
      Alert.alert('A autenticação falou. Por favor, digite sua senha!');
    }
  }

  Platform.OS == 'ios' && authenticate()
  
  function telaCadastrar(){
    navigation.navigate('registration');
  }
  
  function telaInicio(){
    navigation.navigate('inicio');
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
            <Button title="Acessar" w="full" bg="green.500" borderRadius={100} onPress={telaInicio}/>
          </HStack>
          <HStack>
            <Button mt={16}title="Cadastrar" w="full" bg="green.500" borderRadius={100} onPress={telaCadastrar}/>
            {/* <Button mt={80}title="Cadastrar" w="full" bg="cor1" borderRadius={100} onPress={telaCadastrar}/> */}
          </HStack>

        </VStack>
      {
        Platform.OS == 'android' && (
          <View>
            <Modal
              animationType='slide'
              transparent={true}
              visible
              onShow={authenticate}
            >

              <TouchableOpacity onPress={() => {
                LocalAuthentication.cancelAuthenticate
              }}>
              </TouchableOpacity>
            </Modal>
          </View>

            // Example()
        )

        
      }


    </VStack>
  );
}
