import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

export default function Registro({navigation}) {

    const Separator = () => (
        <View style={styles.separator} />
      );      

  return (
    <KeyboardAvoidingView
    behavior={"padding"}
    style={styles.kview}
    >
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
      />
      <TextInput
        placeholderTextColor={"#065B76"}
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
       />
      <TextInput
        placeholderTextColor={"#065B76"}
        style={styles.input}
        placeholder="Celular"
        keyboardType="numeric"
       />
      <TextInput
        placeholderTextColor={"#065B76"}
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
       />
      <TextInput
        placeholderTextColor={"#065B76"}
        style={styles.input}
        placeholder="Senha"
        keyboardType="default"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.registerScreenButton}
        onPress={() => Alert.alert('Criar página de Menu')}
        // onPress={() => navigate('Menu')}
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
    </KeyboardAvoidingView>
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