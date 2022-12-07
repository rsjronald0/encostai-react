import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useState } from 'react';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Index({navigation, route}) {

  const getDetails = (type) => {
    if (route.params) {
      switch (type) {
        case 'cpf':
          return route.params.cpf;
        case 'senha':
          return route.params.senha;
      }
    }
    return '';
  };

  const [cpf, setCpf] = useState(getDetails('cpf'));
  const [senha, setSenha] = useState(getDetails('senha'));

  const fetchData = () => {
    fetch('http://192.168.0.10:3000/user/')
      .then((res) => res.json())
      .then((results) => {
        checkUser(results.users);
      })
      .catch((err) => {
        Alert.alert('Erro interno do sistema');
        console.log(err);
      });
  };

  const checkUser = (users) => {
    let erro = true;
    for (const u of users) {
      if (u.cpf == cpf && u.senha == senha) {
        erro = false;
        global.id     = u.id;
        global.nome   = u.nome;
        global.cpf    = u.cpf;
        global.numero = u.numero;
        global.email  = u.email;
        global.senha  = u.senha;
        navigation.navigate("EncostAi - Menu");
      }
    }
    if (erro == true) {
      Alert.alert('CPF ou senha incorretos');
    }
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../assets/logo.png')}
      />
      <TextInput
        placeholderTextColor={"#065B76"}
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        onChangeText={(text) => setCpf(text)}
      />
      <TextInput
        placeholderTextColor={"#065B76"}
        style={styles.input}
        placeholder="Senha"
        keyboardType="default"
        secureTextEntry={true}
        onChangeText={(text) => setSenha(text)}
      />
      <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => 
            fetchData()
            //navigation.navigate("EncostAi - Menu")
          }
          underlayColor='#fff'>
          <Text style={styles.loginText}>ENTRAR</Text>
     </TouchableOpacity>
     <Separator />
     <Text
     style={styles.links}
     onPress={() => navigation.navigate("EncostAi - Senha")}>
      Esqueceu a senha?
     </Text>
     <Text
     style={styles.links}
     onPress={() =>
      navigation.navigate("EncostAi - Registro")
      }>
      Não possui conta? Cadastre-se
     </Text>
      <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '25%'
  },
  logo: {
    width:  '100%',//350,
    height: '50%',
    marginBottom: '5%'
  },
  input: {
    height: '8%',//60,
    width: '75%',//300,
    margin: 12,
    borderRadius:10,
    padding: 10,
    backgroundColor: 'rgba(142,142,147,0.22)',
    fontSize: 16,
  },
  loginScreenButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:15,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#11496E',
    borderTopStartRadius:0,
    borderTopEndRadius:20,
    borderBottomStartRadius:20,
    borderBottomEndRadius:0,
    borderWidth: 1,
    borderColor: '#fff',
    width: '75%',//300,
    height: '10%',//70,
    justifyContent: 'center',
  },
  loginText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#065B76',
    borderBottomWidth: StyleSheet.hairlineWidth*3.5,
    width: 200,
    height: 10,
    marginBottom: 30,
  },
  links: {
    color: '#11496E',
    fontWeight: 'bold',
    paddingBottom: 35,
    fontSize: 18,
  }
});