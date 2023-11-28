import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Congratulations() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUp" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Parabéns por escolher confiar na gente!</Text>

        <Text style={styles.title}>Comece agora a desfrutar de todos os beneficios do Pinkpay</Text>

        <TouchableOpacity
          style={styles.button}
         
        >
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
  );
}
