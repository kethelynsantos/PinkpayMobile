import React from 'react';
import { View, Text, TextInput, TouchableOpacity, } from 'react-native';
import styles from './styles';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();

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
        />

        <Text style={styles.title}>RG</Text>
        <TextInput
          placeholder="Digite seu Digite seu RG"
          style={styles.input}
        />

        <Text style={styles.title}>Nome completo</Text>
        <TextInput
          placeholder="Digite seu nome completo"
          style={styles.input}
        />

        <Text style={styles.title}>E-mail</Text>
        <TextInput
          placeholder="Digite seu e-mail"
          style={styles.input}
        />

        <Text style={styles.title}>Data de nascimento</Text>
        <TextInput
          placeholder="(dd/mm/aaaa)"
          style={styles.input}
        />

        <Text style={styles.title}>Celular</Text>
        <TextInput
          placeholder="Digite seu celular"
          style={styles.input}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Address')}
        >
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
  );
}
