import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles';

import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import axiosInstance from '../../sevices/axiosInstance';

import { setClientId } from '../../reducers/actions';
import { useDispatch } from 'react-redux';

export default function Register({ route }) {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const user = route.params?.user || null;
  const { token } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const createClient = async () => {
    try {
      const response = await axiosInstance.post(
        'client/',
        {
          name: name,
          birth_date: birthdate,
          phone: phoneNumber,
          email: email,
        },
        {
          headers: {
            'Authorization': `Token ${token}`,
          },
        }
      );

      console.log('Cliente criado com sucesso:', response.data);

      const newToken = response.data.token;
      if (newToken) {
        user.token = newToken;
      }

      const newClientId = response.data.id;
      if (newClientId) {
        console.log('Novo ID do cliente:', newClientId); // Adicione este console.log
        dispatch(setClientId(newClientId)); // Despache a ação para atualizar o estado do Redux
      }

      navigation.navigate('Address');
    } catch (error) {
      console.error('Erro ao criar cliente:', error.response.data);
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo (a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Nome completo</Text>
        <TextInput
          placeholder="Digite seu nome completo"
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.title}>Data de nascimento</Text>
        <TextInputMask
          placeholder="(YYYY-MM-DD)"
          style={styles.input}
          type={'datetime'}
          options={{
            format: 'YYYY-MM-DD',
          }}
          value={birthdate}
          onChangeText={(text) => setBirthdate(text)}
        />

        <Text style={styles.title}>Celular</Text>
        <TextInputMask
          placeholder="(99) 99999-9999"
          style={styles.input}
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />

        <Text style={styles.title}>E-mail</Text>
        <TextInput
          placeholder="Digite seu e-mail"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={createClient}
        >
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
