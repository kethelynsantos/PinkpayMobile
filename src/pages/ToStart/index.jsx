import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function ToStart() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/start.png')} style={styles.imageBackground}>
                <Text style={styles.logo}>Pinkpay</Text>

                <Animatable.View animation="fadeInUp" style={styles.rectangle}>
                    <Text style={styles.text}>Abra as portas para um mundo financeiro Pink</Text>

                    <TouchableOpacity 
                        style={styles.button}
                        onPress={ () => navigation.navigate('Register')}
                    >
                        <Text style={styles.buttonText}>Começar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonRegister}
                        onPress={ () => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.registerText}>Entrar na minha conta</Text>
                    </TouchableOpacity>

                </Animatable.View>

            </ImageBackground>
        </View>
    );
}
