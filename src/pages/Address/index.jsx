import React from 'react';
import { View, Text, TextInput, TouchableOpacity, } from 'react-native';
import styles from './styles';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Address() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Endereço</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>CEP</Text>
        <TextInput
          placeholder="Digite seu CEP"
          style={styles.input}
        />

        <Text style={styles.title}>Rua</Text>
        <TextInput
          placeholder="Digite sua rua"
          style={styles.input}
        />

        <Text style={styles.title}>Bairro</Text>
        <TextInput
          placeholder="Digite seu bairro"
          style={styles.input}
        />

        <Text style={styles.title}>Cidade</Text>
        <TextInput
          placeholder="Digite sua cidade"
          style={styles.input}
        />

        <Text style={styles.title}>UF</Text>
        <TextInput
          placeholder="Digite a sigla do seu estado"
          style={styles.input}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('UserImage')}
        >
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
  );
}

