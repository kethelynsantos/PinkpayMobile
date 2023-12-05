import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import axiosInstance from '../../sevices/axiosInstance';
import defaultStyle from '../../defaultStyle/style';
import styles from './styles.js';

export default function Loan({ navigation }) {
  const [requestedAmount, setRequestedAmount] = useState('');
  const [installments, setInstallments] = useState('');
  const [isAmountScreen, setIsAmountScreen] = useState(true);
  const { token } = useSelector((state) => state.userReducer);

  const validLoanRequest = async () => {
    if (isAmountScreen) {
      setIsAmountScreen(false);
    } else {
      try {
        // Defini uma taxa de juros fixa
        const fixedInterestRate = 1.0;

        const response = await axiosInstance.post(
          'loan/request_loan/',
          {
            requested_amount: parseFloat(requestedAmount),
            installments: parseInt(installments),
            interest_rate: fixedInterestRate,
          },
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        // Manipula a resposta da solicitação de empréstimo
        console.log('Resposta da solicitação de empréstimo:', response.data);

        if (response.data.success) {
          Alert.alert('Solicitação de Empréstimo', response.data.success, [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Home'),
            },
          ]);
        } else {
          Alert.alert('Erro ao Solicitar Empréstimo', response.data.error);
        }

      } catch (error) {
        console.error('Erro ao solicitar empréstimo:', error.response?.data || error.message);
        Alert.alert('Erro ao solicitar empréstimo. Tente novamente.');
      }
    }
  };

  return (
    isAmountScreen ? (
      <SafeAreaView style={defaultStyle.container}>
        <View style={defaultStyle.logoArea}></View>
        <View style={{ marginTop: 30 }}>
          <Text style={defaultStyle.title}>Qual é o valor desejado do empréstimo?</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={requestedAmount}
          onChangeText={(text) => setRequestedAmount(text)}
        />
        <TouchableOpacity style={styles.button} onPress={validLoanRequest}>
          <Ionicons name="arrow-forward-outline" size={30} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    ) : (
      <SafeAreaView style={defaultStyle.container}>
        <View style={defaultStyle.logoArea}></View>
        <View style={{ marginTop: 30 }}>
          <Text style={defaultStyle.title}>Em quantas parcelas deseja pagar?</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={installments}
          onChangeText={(text) => setInstallments(text)}
        />
        <TouchableOpacity style={styles.button} onPress={validLoanRequest}>
          <Ionicons name="arrow-forward-outline" size={30} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    )
  );
}