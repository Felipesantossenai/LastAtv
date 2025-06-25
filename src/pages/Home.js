import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { style } from '../style/style';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ImageBackground } from 'react-native';

export default function Home() {

  return (
    <ImageBackground
      source={require('../image/ImagemHome.jpg')}
      style={style.containerHome}
      resizeMode="cover"
    >

      <View>
        <Text style={{
          fontSize: 28,
          fontWeight: 'bold',
          marginTop: 100,
          alignItems: 'center',
          color: 'white'
        }}>Bem-Vindo!</Text>
      </View>
      {/* <View>
        <AntDesign name="logout" size={25} color="white" /></View> */}
    </ImageBackground>
  );
}

