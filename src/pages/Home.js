import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { style } from '../style/style';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ImageBackground } from 'react-native';

export default function Home() {

  return (
    <ImageBackground
      source={require('../image/ImagemHome.jpg')}
      style={style.container}
      resizeMode="cover"
    >

      <View>
        <Text style={{
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 10,
          alignSelf: 'center',
          color: 'black'
        }}>Bem-Vindo!</Text>
      </View>
      <View>
        <AntDesign name="logout" size={50} color="black" /></View>
    </ImageBackground>
  );
}

