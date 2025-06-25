import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { style } from '../style/style';
import { useState } from 'react';
import { ImageBackground } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = () => {
    if (email === 'felipe.r.santos11@aluno.senai.br' && senha === '12345') {
      navigation.navigate('Home');
    } else {
      alert('Erro', 'Usuário ou senha inválidos!');
    }
  };

  return (
    <ImageBackground style={style.containerLogin_00}
      source={require('../image/ImagemLogin.jpg')}
      resizeMode="cover"
    >
      <View style={style.containerLogin_01}>
        <View style={style.viewIcon}>
          <AntDesign name="login" size={25} color="white" style={style.iconEmail} />

          <TextInput
            placeholder='Digite seu E-mail'
            value={email}
            onChangeText={setEmail}
            placeholderTextColor={'white'}
            style={style.input}
            keyboardType='email-address'
            autoCapitalize='none'

          />
        </View>



        <View style={style.viewIcon}>
          <MaterialIcons name="password" size={25} color="white" style={style.iconPassword} />

          <TextInput
            style={style.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            placeholderTextColor={'white'}
            secureTextEntry={true}
          />
        </View>


        <View style={style.button_00}>
          <TouchableOpacity style={style.button_01} onPress={login}>
            <Text style={style.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
}


