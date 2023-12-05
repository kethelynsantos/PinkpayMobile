import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import defaultStyle from '../../defaultStyle/style.jsx';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles.js';

import axiosInstance from '../../sevices/axiosInstance.jsx';

export default function Transfer({ navigation }) {
  const [moneyValue, setMoneyValue] = useState('');
  const [keyValue, setKeyValue] = useState('');
  const [isValueScreen, setIsValueScreen] = useState(true);
  const { accountBalance, token } = useSelector((state) => state.userReducer);

  const validValueTransfer = async () => {
    const numericValue = extractNumericNumber(moneyValue);
  
    if (numericValue === 0) {
      Alert.alert('', 'O valor não pode ser igual a 0', [
        {
          text: 'OK',
          style: 'destructive',
          onPress: () => {},
        },
      ]);
      return;
    }
  
    if (isValueScreen) {
      setIsValueScreen(false);
    } else {
      try {
        const response = await axiosInstance.post(
          'transfer/',
          {
            transfer_amount: numericValue,
            recipient_cpf: keyValue,
            transfer_type: 'Transfer',
          },
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
  
        // Manipular a resposta da transferência
        console.log('Resposta da transferência:', response.data);
  
        navigation.navigate('Home');
  
      } catch (error) {
        console.error('Erro ao realizar transferência:', error.response?.data || error.message);
        // Tratar o erro conforme necessário
        Alert.alert('Erro ao realizar transferência. Tente novamente.');
      }
    }
  };

  function extractNumericNumber(str) {
    const valueWithoutSymbol = str.replace(/[^\d,]/g, '');
    const numericValue = parseFloat(valueWithoutSymbol.replace(',', ''));
    return numericValue;
  }

  return (
    isValueScreen ? (
      <SafeAreaView style={defaultStyle.container}>
        <View style={defaultStyle.logoArea}></View>
        <View style={{ marginTop: 30 }}>
          <Text style={defaultStyle.title} >Qual é o valor da transferência?</Text>
          <Text style={defaultStyle.subtitle}>Saldo disponível em conta: {accountBalance}</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={moneyValue}
          onChangeText={(text) => setMoneyValue(text)}
        />
        <TouchableOpacity style={styles.button} onPress={validValueTransfer}>
          <Ionicons name='arrow-forward-outline' size={30} color={'white'} />
        </TouchableOpacity>
      </SafeAreaView>
    ) : (
      <SafeAreaView style={defaultStyle.container}>
        <View style={defaultStyle.logoArea}></View>
        <View style={{ marginTop: 30 }}>
          <Text style={defaultStyle.title} >Qual o CPF da pessoa que irá receber?</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={keyValue}
          onChangeText={(text) => setKeyValue(text)}
        />
        <TouchableOpacity style={styles.button} onPress={validValueTransfer}>
          <Ionicons name='arrow-forward-outline' size={30} color={'white'}/>
        </TouchableOpacity>
      </SafeAreaView>
    )
  )
}