import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { useState } from 'react';

export default function Registro({navigation, route}) {

    const Separator = () => (
        <View style={styles.separator} />
      );      


      const getDetails = (type) => {
        if (route.params) {
          switch (type) {
            case 'nome':
              return route.params.nome;
            case 'email':
              return route.params.email;
            case 'numero':
              return route.params.numero;
            case 'cpf':
              return route.params.cpf;
            case 'senha':
              return route.params.senha;
          }
        }
        return '';
      };

      const [nome, setNome] = useState(getDetails('nome'));
      const [email, setEmail] = useState(getDetails('email'));
      const [numero, setNumero] = useState(getDetails('numero'));
      const [cpf, setCpf] = useState(getDetails('cpf'));
      const [senha, setSenha] = useState(getDetails('senha'));    


      const fetchData = async () => {
        await fetch('http://192.168.0.10:3000/user/')
          .then((res) => res.json())
          .then((results) => {
            checkUser(results.users);
          })
          .catch((err) => {
            Alert.alert('Erro interno do sistema');
          });
      };

      const checkUser = (users) => {
        for (const u of users) {
          if (u.cpf == cpf && u.senha == senha) {
            global.id     = u._id;
            global.nome   = u.nome;
            global.cpf    = u.cpf;
            global.numero = u.numero;
            global.email  = u.email;
            global.senha  = u.senha;
            navigation.navigate("EncostAi - Menu");
          }
        }
      }

      const submitData = () => {
        fetch('http://192.168.0.10:3000/user/add', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome,
            email,
            numero,
            cpf,
            senha,
          }),
        })
          .then((res) => res.json())
          .then(async (data) => {
            Alert.alert(`Usuário ${nome} foi cadastrado com sucesso!`);
            await fetchData();
          })
          .catch((err) => {
            Alert.alert('alguma coisas deu errado' + err);
          });
      };


  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../assets/logo2.png')}
      />
      <TextInput
        placeholderTextColor={"#065B76"}
        style={styles.input}
        placeholder="Nome"
        keyboardType="default"
        onChangeText={(text) => setNome(text)}
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
        placeholder="Celular"
        keyboardType="numeric"
        onChangeText={(text) => setNumero(text)}
       />
      <TextInput
        placeholderTextColor={"#065B76"}
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
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
        style={styles.registerScreenButton}
        onPress={() => submitData()}
        // onPress={() => navigation.navigate('EncostAi - Menu')}
        underlayColor='#fff'>
        <Text style={styles.registerText}>CRIAR CONTA</Text>
      </TouchableOpacity>
      <Separator />
      <Text
        style={styles.links}
        onPress={() =>
        navigation.navigate("EncostAi - Login")}>
        Já possui conta? Entrar agora
     </Text>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
    kview: {
      flex: 1,
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '50%',
    marginBottom: '8%'
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
  registerScreenButton:{
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
    height: '7%',//70,
    justifyContent: 'center',
  },
  registerText:{
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
    fontSize: 18,
  }
});