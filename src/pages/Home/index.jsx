import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import axiosInstance from '../../sevices/axiosInstance';
import { useSelector } from 'react-redux';

export default function Home() {
  const navigation = useNavigation();
  const [image, setImage] = useState("https://static.vecteezy.com/system/resources/previews/008/302/463/non_2x/eps10-pink-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg");
  const [userName, setUserName] = useState('');
  const { token, clientId } = useSelector((state) => state.userReducer);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    // Buscar detalhes do cliente usando o token e o ID do cliente
    const fetchClientDetails = async () => {
      try {
        const response = await axiosInstance.get(`client/${clientId}/`, {
          headers: {
            'Authorization': `Token ${token}`,
          },
        });
        setUserName(response.data.name);
      } catch (error) {
        console.error('Erro ao obter detalhes do cliente:', error.response.data);
      }
    };

    fetchClientDetails();
  }, [token, clientId]);

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '15%' }}>
          <Text style={styles.message}>Olá, {userName}</Text>
          <Image source={{ uri: image }} style={{ width: 52, height: 52, borderRadius: 52, marginLeft: 118 }} />
        </View>
      </Animatable.View>

      <View style={styles.containerHeader}>
        <Text style={styles.message}>R$ 1000.00</Text>
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
