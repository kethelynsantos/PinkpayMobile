import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Congratulations() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInUp" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Parabéns por escolher confiar na gente!</Text>

                <View style={styles.containerImage}>
                    <Image source={require('../../assets/congratulations.png')} style={{ width: 218, height: 218, marginTop: 40, marginBottom: 40 }} />
                </View>

                <Text style={styles.title}>Comece agora a desfrutar de todos os beneficios do Pinkpay</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={ () => navigation.navigate('Home')}
                >
                    <Text style={styles.buttonText}>Começar</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}
