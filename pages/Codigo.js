import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Codigo({navigation}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      style={styles.kview}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../assets/logo.png')}
      />
      <Text style={styles.recuperar}>Verifique o seu celular</Text>
      <Text style={styles.recuperar2}>Você receberá um código para verificar aqui, de modo que consiga redefinir a senha da sua conta.</Text>
      <TextInput
        placeholderTextColor={"#065B76"}
        style={styles.input}
        placeholder="Digite o código"
        keyboardType="numeric"
      />
      <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => navigation.navigate("EncostAi - Login")}
          underlayColor='#fff'>
          <Text style={styles.loginText}>ENVIAR</Text>
     </TouchableOpacity>
     <Separator />
     <Text
     style={styles.links}
     onPress={() =>
      navigation.navigate("EncostAi - Registro")}>
      Não possui conta? Cadastre-se
     </Text>
      <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  kview: {
    flex: 1,
  },
  recuperar: {
    color: '#555555',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: '5%'
  },
  recuperar2: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: '9%'
  },
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
  },
  input: {
    height: '8%',//60,
    width: '75%',//300,
    margin: 12,
    borderRadius:10,
    padding: 10,
    backgroundColor: 'rgba(142,142,147,0.22)',
  },
  loginScreenButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:15,
    marginBottom: 40,
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