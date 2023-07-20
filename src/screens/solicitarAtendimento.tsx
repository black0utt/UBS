import { VStack, Input, HStack, IconButton, useTheme, Center, Heading, Box, Select, CheckIcon} from 'native-base';
import { SignOut, ChatTeardropText, House} from 'phosphor-react-native';
// import Logo from '../assets/logo_secondary.svg';
import {Button} from '../components/Button';
import {Image, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native'


//firebaseimport
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseconfig';
import { getFirestore, collection, addDoc } from "firebase/firestore";
const app = initializeApp(firebaseConfig);

export function SolicitarAtendimento(){
    const [user, setUser] = React.useState(null);
    const { colors } = useTheme();
    const img = require('../assets/logop.png');
    const navigation = useNavigation();
    const db = getFirestore(app);
    const [service, setService] = React.useState("");
    const [horario, setHorario] = React.useState("");
    const auth = getAuth(app);
    

    // Monitorar a autenticação do usuário
    React.useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
  
      // Limpar o listener quando o componente é desmontado
      return () => unsubscribe();
    }, []);

    const criarAtendimento = async (service: any, horario: any) => {
        try {
          // Verificar se o usuário está autenticado
          if (user) {
            const userEmail = user.email;
      
            // Realizar a lógica para criar o agendamento no banco de dados aqui
            const atendimentosCollection = collection(db, "atendimentos");
            const newAtendimento = {
              service,
              horario,
              userEmail, // Adicionar o e-mail do usuário ao objeto do agendamento
              // Outros campos relevantes para o agendamento podem ser adicionados aqui
            };
            const docRef = await addDoc(atendimentosCollection, newAtendimento);
            console.log("Agendamento criado com ID: ", docRef.id);
            alert('Atendimento agendado com sucesso!')
            navigation.navigate('inicio')
            // Inserir qualquer outra lógica necessária após criar o agendamento
          } else {
            // Se o usuário não estiver autenticado, tratar o erro aqui
            console.error("Usuário não autenticado.");
          }
        } catch (error) {
          console.error("Erro ao criar agendamento: ", error);
        }
      };
      

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
                    <Select.Item label="Consulta médica" value="Consulta Médica" />
                    <Select.Item label="Odontológico" value="Consulta odontológica" />
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
                    <Select.Item label="14:00" value="14 horas" />
                    <Select.Item label="15:00" value="15 horas" />
                    <Select.Item label="16:00" value="16 horas" />
                    <Select.Item label="17:00" value="17 horas" />
                    <Select.Item label="18:00" value="18 horas" />
                    <Select.Item label="19:00" value="19 horas" />
                    <Select.Item label="20:00" value="20 horas" />
                    <Select.Item label="21:00" value="21 horas" />
                    <Select.Item label="22:00" value="22 horas" />
                    <Select.Item label="23:00" value="23 horas" />

                    </Select>
                </Box>      
            </HStack>
            <HStack w="full" mt={10} justifyContent="space-between" alignItems="center">
            <Button title="Agendar atendimento" w="full" bg="green.500" borderRadius={100} onPress={() => criarAtendimento(service, horario)}/>
            </HStack>  
        </VStack>
    );

}