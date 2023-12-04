import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

import * as Animatable from 'react-native-animatable';
import axiosInstance from '../../sevices/axiosInstance';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setClientId, setClientName } from '../../reducers/actions';

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [image, setImage] = useState("https://static.vecteezy.com/system/resources/previews/008/302/463/non_2x/eps10-pink-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg");
  const [userName, setUserName] = useState('');
  const { token, clientId } = useSelector((state) => state.userReducer);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [accountBalance, setAccountBalance] = useState(0);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    const accessClient = async () => {
      try {
        const response = await axiosInstance.get('current-client/', {
          headers: {
            'Authorization': `Token ${token}`,
          },
        });

        const newClientId = response.data.id;
        const clientName = response.data.name;
        const clientImage = response.data.photo;

        if (newClientId) {
          console.log('ID do cliente:', newClientId);
          dispatch(setClientId(newClientId));
        }

        if (clientName) {
          console.log('Nome do cliente:', clientName);
          dispatch(setClientName(clientName));

          setUserName(clientName);
        }

        if (clientImage) {
          console.log('Imagem do cliente encontrada:', clientImage);
          setImage(clientImage);
        } else {
          console.log('Imagem do cliente não encontrada. Usando imagem padrão.');
          setImage("https://static.vecteezy.com/system/resources/previews/008/302/463/non_2x/eps10-pink-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg");
        }
      } catch (error) {
        console.error('Erro ao acessar cliente:', error.response.data);
      }
    };

    accessClient();
  }, [token, clientId, dispatch]);

  useEffect(() => {
    const fetchAccountBalance = async () => {
      try {
        const response = await axiosInstance.get('balance/', {
          headers: {
            'Authorization': `Token ${token}`,
          },
        });

        const balance = response.data.current_balance;

        if (balance !== undefined) {
          console.log('Saldo da conta:', balance);
          setAccountBalance(balance);
        }
      } catch (error) {
        console.error('Erro ao obter saldo da conta:', error.response.data);
      }
    };

    fetchAccountBalance();
  }, [token]);


  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeaderTop}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '15%' }}>
          <Text style={styles.message}>Olá, {userName}</Text>
          <Image source={{ uri: image }} style={{ width: 52, height: 52, borderRadius: 52, marginLeft: 118 }} />
        </View>
      </Animatable.View>

      <View style={{ left: 20, marginBottom: 20}}>
        <Text style={styles.title}>Agência: 2582 | Conta 223443</Text>
      </View>

      <View style={styles.containerHeader}>
        {isPasswordVisible ? (
          <Text style={styles.message}>R$ {accountBalance}</Text>
        ) : (
          <Text style={styles.message}>Saldo oculto</Text>
        )}
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
          <Feather name={isPasswordVisible ? 'eye' : 'eye-off'} size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Ver extrato</Text>
      </View>

      <Animatable.View animation="fadeInUp" style={styles.containerMain}>
        <View style={styles.containerSquareMain}>
          <View style={styles.containerSquare}>
            <View style={styles.square}>
              <View style={styles.containerImage}>
                <Image source={require('../../assets/pix.png')} style={{ width: 25, height: 25, marginTop: 20, marginBottom: 10 }} />
                <Text style={styles.titleSquare}>Área Pix</Text>
              </View>
            </View>
            <View style={styles.square}>
              <View style={styles.containerImage}>
                <Image source={require('../../assets/transferencias.png')} style={{ width: 23, height: 23, marginTop: 20, marginBottom: 10 }} />
                <Text style={styles.titleSquare}>Transferências</Text>
              </View>
            </View>
            <View style={styles.square}>
              <View style={styles.containerImage}>
                <Image source={require('../../assets/pagamentos.png')} style={{ width: 26, height: 22, marginTop: 20, marginBottom: 10 }} />
                <Text style={styles.titleSquare}>Pagamentos</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.borderedView}>
          <View >
            <View style={styles.topBorder}></View>
            <View style={styles.containerHeaderFunc}>
              <Image source={require('../../assets/porquinho.png')} style={{ width: 23, height: 23, marginTop: 20, marginBottom: 10, marginLeft: 11 }} />
              <Text style={styles.titleBlack}>Empréstimo</Text>
              <Image source={require('../../assets/seta.png')} style={{ width: 9, height: 16, marginTop: 20, marginBottom: 10, marginLeft: 200 }} />
            </View>
            <Text style={styles.titleGrey}>Valor disponível de até</Text>
            <Text style={styles.titleGreySecond}>R$ 20.000,00 </Text>
          </View>

          <View >
            <View style={styles.topBorder}></View>
            <View style={styles.containerHeaderFunc}>
              <Image source={require('../../assets/cartao.png')} style={{ width: 19, height: 15, marginTop: 20, marginBottom: 10, marginLeft: 10 }} />
              <Text style={styles.titleBlack}>Meus cartões</Text>
              <Image source={require('../../assets/seta.png')} style={{ width: 9, height: 16, marginTop: 20, marginBottom: 10, marginLeft: 194 }} />
            </View>
            <Text style={styles.titleGreySecond}>Gerencie todos os seus cartões em um só lugar</Text>
          </View>

          <View >
            <View style={styles.topBorder}></View>
            <View style={styles.containerHeaderFunc}>
              <Image source={require('../../assets/pontos.png')} style={{ width: 16, height: 4, marginTop: 20, marginBottom: 10, marginLeft: 10 }} />
              <Text style={styles.titleBlack}>Outros serviços</Text>
              <Image source={require('../../assets/seta.png')} style={{ width: 9, height: 16, marginTop: 20, marginBottom: 10, marginLeft: 182 }} />
            </View>
            <Text style={styles.titleGreySecond}>Decubra tudo que esse mundo pink pode te oferecer</Text>
          </View>

          <View >
            <View style={styles.topBorder}></View>
            <View style={styles.containerHeaderFunc}>
              <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', marginLeft: 8, marginTop: 32, }}>Cartão de crédito</Text>
              <Image source={require('../../assets/seta.png')} style={{ width: 9, height: 16, marginTop: 32, marginBottom: 10, marginLeft: 208 }} />

            </View>
            <Text style={styles.titleGrey}>Fatura atual</Text>
            <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', marginLeft: 30, marginTop: 10, }}>R$ 455,90</Text>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
}
