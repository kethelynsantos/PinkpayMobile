import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'; // Importe o componente TextInputMask
import styles from './styles';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import axiosInstance from '../../sevices/axiosInstance';

export default function Address() {
  const navigation = useNavigation();

  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const { token } = useSelector((state) => state.userReducer);

  const saveAddress = async () => {
    try {
      const response = await axiosInstance.post(
        'address/',
        {
          street,
          neighborhood,
          city,
          state,
          zip_code: zipCode,
        },
        {
          headers: {
            'Authorization': `Token ${token}`,
          },
        }
      );

      console.log('Endereço cadastrado com sucesso:', response.data);

      navigation.navigate('UserImage');
    } catch (error) {
      console.error('Erro ao cadastrar endereço:', error.response.data);
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Endereço</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Rua</Text>
        <TextInput
          placeholder="Digite sua rua"
          style={styles.input}
          value={street}
          onChangeText={(text) => setStreet(text)}
        />

        <Text style={styles.title}>Bairro</Text>
        <TextInput
          placeholder="Digite seu bairro"
          style={styles.input}
          value={neighborhood}
          onChangeText={(text) => setNeighborhood(text)}
        />

        <Text style={styles.title}>Cidade</Text>
        <TextInput
          placeholder="Digite sua cidade"
          style={styles.input}
          value={city}
          onChangeText={(text) => setCity(text)}
        />

        <Text style={styles.title}>UF</Text>
        <TextInput
          placeholder="Digite a sigla do seu estado"
          style={styles.input}
          value={state}
          onChangeText={(text) => setState(text)}
        />

        <Text style={styles.title}>CEP</Text>
        <TextInputMask
          placeholder="Digite seu CEP"
          style={styles.input}
          type={'zip-code'}
          value={zipCode}
          onChangeText={(text) => setZipCode(text)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={saveAddress}
        >
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
