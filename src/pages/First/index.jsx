import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function First({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('ToStart');
        }, 3000);
    }, []);

    return (
        <View animation="fadeInUp" delay={500} style={styles.container}>
            <Animatable.View animation="fadeInUp" delay={500}>
                <Text style={styles.logo}>Pinkpay</Text>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF007F',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        color: '#FFFFFF',
        fontSize: 36,
        fontWeight: 'bold',
    },

});