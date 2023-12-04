import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import defaultStyle from '../../defaultStyle/style.jsx';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

import axiosInstance from '../../sevices/axiosInstance';


export default function Pix({ navigation }) {
  const [moneyValue, setMoneyValue] = useState('');
  const [keyValue, setKeyValue] = useState('');
  const [isValueScreen, setIsValueScreen] = useState(true);
  const [isCNPJ, setIsCNPJ] = useState(false);
  const [valid, setValid] = useState(false);

  const dispatch = useDispatch();
  const { accountBalance, token } = useSelector((state) => state.userReducer);

  const validValueTransfer = async () => {
    const numericValue = extractNumericNumber(moneyValue);

    if (numericValue === 0) {
      Alert.alert('', 'O valor não pode ser igual a 0', [
        {
          text: 'OK',
          style: 'destructive',
          onPress: () => { },
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
            recipient_cpf: removeSpecialCharacters(keyValue),
            transfer_type: 'pix',
          },
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        // Manipular a resposta conforme necessário
        console.log('Resposta da transferência:', response.data);

        // Você pode adicionar mais lógica aqui, como mostrar uma mensagem de sucesso
        Alert.alert('Transferência realizada com sucesso!', '', [
          {
            text: 'OK',
            onPress: () => {
              // Navegar para outra tela ou realizar ações adicionais se necessário
              navigation.navigate('Home');
            },
          },
        ]);
      } catch (error) {
        console.error('Erro ao realizar transferência:', error.response.data);
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

  function setValueCpfCnpj(text) {
    setIsCNPJ(text.length > 13);
    setKeyValue(text);

    const isValidLength = text.length === 14 || text.length === 18;
    setValid(isValidLength);
  }

  function removeSpecialCharacters(input) {
    return input.replace(/[^0-9]/g, '');
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
          onChangeText={(text) => setValueCpfCnpj(text)}
        />
        <TouchableOpacity style={styles.button} onPress={validValueTransfer}>
          <Ionicons name='arrow-forward-outline' size={30} />
        </TouchableOpacity>
      </SafeAreaView>
    )
  )
}