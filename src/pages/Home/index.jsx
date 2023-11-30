import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [image, setImage] = useState("https://static.vecteezy.com/system/resources/previews/008/302/463/non_2x/eps10-pink-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '13%' }}>
          <Text style={styles.message}>Olá, Kethelyn Gabrielly</Text>
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

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <View style={styles.containerSquare}>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
        </View>
      </Animatable.View>
    </View>
  );
}