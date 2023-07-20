import { VStack, Input, HStack, IconButton, useTheme, Center, FlatList, View, Heading} from 'native-base';
import { SignOut, ChatTeardropText, House} from 'phosphor-react-native';
// import Logo from '../assets/logo_secondary.svg';
import {Button} from '../components/Button';
import {Image, ListRenderItemInfo, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native'
import styles from '../styles/styles';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 


//firebaseimport
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseconfig';
import { collection, doc, getFirestore, setDoc, getDocs, query, getDoc, Firestore, deleteDoc } from "firebase/firestore"; 


export function ListarAtendimento(){
    const [user, setUser] = React.useState(null);
    const { colors } = useTheme();
    const img = require('../assets/logop.png');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);


    const handleRemoveItem = async (itemId) => {

      try {    
      // Remove the item with the given ID from the "atendimentos" collection
      
      await deleteDoc(doc(db, "atendimentos", itemId));
  
      console.log("Item removed:", itemId);
      // Fetch the updated list of atendimentos after removing the item

          // Update the atendimentoss state to remove the deleted item
        setAtendimentoss((prevAtendimentos) =>
        prevAtendimentos.filter((atendimento) => atendimento.id !== itemId)
      );
      } 
         
      catch (error) {
            
           
      console.error("Error removing item:", error);
          }
        };

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
          
        });
    
        // Limpar o listener quando o componente é desmontado
        return () => unsubscribe();
      }, []);

    const [atendimentoss, setAtendimentoss] = useState([]);

    useEffect(() => {
        if (user) {
          const fetchAtendimentos = async () => {
            try {
              const q = query(collection(db, "atendimentos"));
              const querySnapshot = await getDocs(q);
              let d = [];
              querySnapshot.forEach((doc) => {
                const atendimentos = {
                  id: doc.id, // Use doc.id as the key
                  userEmail: doc.data().userEmail,
                  service: doc.data().service,
                  horario: doc.data().horario,
                };
                if (atendimentos.userEmail === user.email) {
                  d.push(atendimentos);
                }
              });
              setAtendimentoss(d);
            } catch (error) {
              console.error('Erro ao buscar atendimentos:', error);
            }
          };
      
          fetchAtendimentos();
        }
      }, [user]);
      

      const renderItem = ({ item }) => (
        <View key={item.id} style={styles.card}>
            <View style={styles.content}>
              <Text style={styles.label}>Email: {item.userEmail}</Text>
              <Text style={styles.label}>Tipo de Atendimento: {item.service}</Text>
              <Text style={styles.label}>Horario: {item.horario}</Text>
            </View>
            <IconButton
              icon={<FontAwesome name="remove" size={16} color="red" />}
              onPress={() => handleRemoveItem(item.id)}
              style={styles.iconContainer}
            />
        </View>

        
        
    );
      

    return(
    <VStack flex={1} p={6} pt={20} bg='white'>
      <Center>
        <Image source={img} />
      </Center>
      <Heading textAlign="center" my={6}>Listar atendimentos</Heading>
      <FlatList
        data={atendimentoss}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </VStack>

    )

}
