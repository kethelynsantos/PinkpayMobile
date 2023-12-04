import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../../reducers/actions';
import axiosInstance from '../../sevices/axiosInstance';

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('');

  const { token } = useSelector((state) => state.userReducer);

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

      const { auth_token } = login.data;
      dispatch(setToken(auth_token));

      console.log('login realizado com sucesso:', login.data);

      console.log('Token no Redux:', auth_token);

      navigation.navigate('Home');

    } catch (error) {
      console.error('Erro ao fazer login:', error.response.data);
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Login</Text>
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
        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.registerText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={loginUser}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.register}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
