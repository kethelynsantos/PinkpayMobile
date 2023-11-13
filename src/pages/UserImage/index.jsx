import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';


export default function UserImage() {
  const navigation = useNavigation();

  const [image, setImage] = useState("https://static.vecteezy.com/system/resources/previews/008/302/463/non_2x/eps10-pink-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg");

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const webcam = async () => {
    const result = ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    })

    console.log((await result).assets[0].uri)

    if (!(await result).canceled) {
        setImage((await result).assets[0].uri)
    }
}

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Foto de perfil</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerInfo}>
        <Text style={styles.title}>Falta pouco para concluir seu cadastro!</Text>

        <Text style={styles.register}>
          Escolha uma foto de perfil e comece já a desfrutar de todos os benefícios que o Pinkpay oferece para você
        </Text>

        <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 100, marginTop: 40 }} />

        <TouchableOpacity onPress={handleImagePicker} style={styles.button}>
          <Text style={{ color: '#fff', fontWeight: '600' }}>Escolher Imagem</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} 
          onPress={webcam}>
          <Text style={{ color: '#fff', fontWeight: '600' }}>Tirar a foto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => navigation.navigate('Congratulations')}
        >
          <Text style={styles.title}>Concluir cadastro</Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
  );
}
