import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Menu({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../assets/logo2.png')}
      />
      <View style={styles.row}>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("EncostAi - Contatos")}>
        <Image style={styles.imgBtn} source={require("../assets/btn-1.png")}/>
        <Text style={styles.textBtn1}>CONTATOS DE</Text>
        <Text style={styles.textBtn1}>EMERGÊNCIA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("EncostAi - Pontos de Risco")}>
        <Image style={styles.imgBtn} source={require("../assets/btn-2.png")}/>
        <Text style={styles.textBtn2}>PONTOS DE</Text>
        <Text style={styles.textBtn2}>RISCO</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate("EncostAi - Vistorias")}>
        <Image style={styles.imgBtn} source={require("../assets/btn-3.png")}/>
        <Text style={styles.textBtn3}>VISTORIAS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4} onPress={() => navigation.navigate("EncostAi - Abrigos")}>
        <Image style={styles.imgBtn} source={require("../assets/btn-4.png")}/>
        <Text style={styles.textBtn4}>ABRIGOS</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity style={styles.button5}>
        <Image style={styles.imgBtn} source={require("../assets/btn-5.png")}/>
        <Text style={styles.textBtn5}>MEU PERFIL</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button6} onPress={() => navigation.navigate("EncostAi - Receber SMS")}>
        <Image style={styles.imgBtn} source={require("../assets/btn-6.png")}/>
        <Text style={styles.textBtn6}>RECEBER SMS</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  logo: {
      width: '50%',
      marginBottom: '10%'
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '10%'
  },
  button1: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#A31D42',
    borderTopWidth: 10,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  button2: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#CD8D00',
    borderTopWidth: 10,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  button3: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#DD5521',
    borderTopWidth: 10,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  button4: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#2C5F2E',
    borderTopWidth: 10,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  button5: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#11496E',
    borderTopWidth: 10,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  button6: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#0868A2',
    borderTopWidth: 10,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  imgBtn: {
    width: 48,
    height: 50,
    marginTop: 20,
    marginBottom: 25,
    marginHorizontal: 50,
  },
  textBtn1: {
    color: '#A31D42',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textBtn2: {
    color: '#CD8D00',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textBtn3: {
    color: '#DD5521',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 8,
  },
  textBtn4: {
    color: '#2C5F2E',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 8,
  },
  textBtn5: {
    color: '#11496E',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 8,
  },
  textBtn6: {
    color: '#0868A2',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 8,
  },
});