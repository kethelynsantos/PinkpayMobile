import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../../reducers/actions';
import axiosInstance from '../../sevices/axiosInstance';

export default function Welcome() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const { token } = useSelector((state) => {
    return state.userReducer;
  });

  const createUser = async () => {
    try {
      const response = await axiosInstance.post(
        'customuser/register/',
        {
          cpf: cpf,
          password: password,
        },
        {
          headers: {
            'Authorization': 'Token fd478484c6a5192225e424c463b114ffe5143a30',
          },
        }
      );

      console.log('Usuário criado com sucesso:', response.data);

      navigation.navigate('Register');
      loginUser();

    } catch (error) {
      console.error('Erro ao criar usuário:', error.response.data);
    }
  };

  const loginUser = async () => {
    try {
      const login = await axiosInstance.post(
        'auth/token/login/',
        {
          cpf: cpf,
          password: password,
        },
        {
          headers: {
            'Authorization': `Token fd478484c6a5192225e424c463b114ffe5143a30`,
          },
        }
      );
      
      dispatch(setToken(login.data.auth_token));

    } catch (error) {
      console.error('Erro ao fazer login:', error.response.data);
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo (a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>CPF</Text>
        <TextInput
          placeholder="Digite seu CPF"
          style={styles.input}
          value={cpf}
          onChangeText={(text) => setCPF(text)}
        />

        <Text style={styles.title}>Senha</Text>
        <View style={styles.passwordInputContainer}>
          <View style={styles.passwordInput}>
            <TextInput
              placeholder="Crie uma senha"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
            <Feather name={isPasswordVisible ? 'eye' : 'eye-off'} size={20} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={createUser}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
