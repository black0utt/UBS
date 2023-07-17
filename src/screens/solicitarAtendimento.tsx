import { VStack, Input, HStack, IconButton, useTheme, Center, Heading, Box, Select, CheckIcon} from 'native-base';
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

export function SolicitarAtendimento(){
    const { colors } = useTheme();
    const img = require('../assets/logop.png');
    const navigation = useNavigation();

    const [service, setService] = React.useState("");
    const [horario, setHorario] = React.useState("")

    return(
        <VStack flex={1} p={6} pt={20} bg='white'>
            <HStack w="full" justifyContent="space-between" alignItems="center" pb={5} px={50}>
                <Center>
                    <Image source={img} />
                </Center>
            </HStack>

            <HStack justifyContent="center" >
                <Heading textAlign="center">Solicitar Atendimento</Heading>
            </HStack>

            <HStack w="full" justifyContent="space-between" alignItems="center" mt={10}>
                <Heading alignItems="center">Atendimento</Heading>
                <Box>
                    
                    <Select selectedValue={service} minWidth="200" accessibilityLabel="Tipo de atendimento" placeholder="Tipo de atendimento" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="10" />
                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                    <Select.Item label="Consulta médica" value="medico" />
                    <Select.Item label="Odontológico" value="odonto" />
                    </Select>
                </Box>      
            </HStack>
            <HStack w="full" justifyContent="space-between" alignItems="center" mt={4}>
                <Heading alignItems="center">Horário</Heading>
                <Box>
                    
                    <Select selectedValue={horario} minWidth="200" accessibilityLabel="Selecione o horário" placeholder="Selecione o horário" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="10" />
                }} mt={1} onValueChange={itemValue => setHorario(itemValue)}>
                    <Select.Item label="14:00" value="duas" />
                    <Select.Item label="15:00" value="tres" />
                    <Select.Item label="16:00" value="quatro" />
                    <Select.Item label="17:00" value="cinco" />
                    <Select.Item label="18:00" value="seis" />
                    <Select.Item label="19:00" value="sete" />
                    <Select.Item label="20:00" value="oito" />
                    <Select.Item label="21:00" value="nove" />
                    <Select.Item label="22:00" value="dez" />
                    <Select.Item label="23:00" value="onze" />

                    </Select>
                </Box>      
            </HStack>
            <HStack w="full" mt={10} justifyContent="space-between" alignItems="center">
            <Button title="Agendar atendimento" w="full" bg="green.500" borderRadius={100}/>
            </HStack>  
        </VStack>
    );

}