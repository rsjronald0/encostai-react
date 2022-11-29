import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import call from 'react-native-phone-call';
import React, { useState } from "react";

export default function Contatos({navigation}) {

    const bombeiros = {
        number: '193',
    }
    const samu = {
        number: '192',
    }
    const defesa = {
        number: '199',
    }
    const policia_militar = {
        number: '190',
    }
    const policia_civil = {
        number: '197',
    }

    const [text, setText] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.viewSeta}>
        <Pressable
        onPress={() => navigation.navigate("EncostAi - Menu")}>
        <Image
            style={styles.seta}
            source={require('../assets/seta_contatos.png')}
        />
        </Pressable>
        </View>
        <View style={styles.viewTitle}>
        <Text style={styles.title}>Contatos de emergência</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Image
            source={require('../assets/search_contatos.png')}
            style={styles.search}
        />
        <TextInput
            style={styles.inputStyle}
            autoCorrect={true}
            placeholderTextColor={"#555555"}
            placeholder="Quem você está procurando?"
            value={text}
            onChangeText={(value) => setText(value)}
            />
        <Pressable style={styles.pressX} onPress={() => setText("")}>
        <Image
            source={require('../assets/x_contatos.png')}
            style={styles.x}
        />
        </Pressable>
      </View>
      <TouchableOpacity style={styles.contato} onPress={() => call(bombeiros)}>
        <Text style={styles.textoContato}>CORPO DE BOMBEIROS</Text>
        <Text style={styles.numero}>193</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contato} onPress={() => call(samu)}>
        <Text style={styles.textoContato}>SAMU</Text>
        <Text style={styles.numero}>192</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contato} onPress={() => call(defesa)}>
        <Text style={styles.textoContato}>DEFESA CIVIL</Text>
        <Text style={styles.numero}>199</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contato} onPress={() => call(policia_militar)}>
        <Text style={styles.textoContato}>POLÍCIA MILITAR</Text>
        <Text style={styles.numero}>190</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contato} onPress={() => call(policia_civil)}>
        <Text style={styles.textoContato}>POLÍCIA CIVIL</Text>
        <Text style={styles.numero}>197</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '8%'
  },
  title: {
    color: '#555555',
    fontWeight: 'bold',
    fontSize: 20,
  },
  seta: {
    zIndex: 10,
    elevation: 10,
  },
  row: {
    flexDirection: 'row',
  },
  viewSeta: {
    justifyContent: 'flex-start',
    flex: 1,
    paddingLeft: '8%'
  },
  viewTitle: {
    paddingRight: '19.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#A31D42',
    borderRadius: 12,
    borderWidth: 2.6,
    borderBottomWidth: 2.6,
    alignItems: 'center',
    height: '4%',
    width: '87%',
    marginVertical: '6%',
    justifyContent: 'center'
  },
  search: {
    height: 15,
    width: 15,
    position: 'absolute',
    left: '2.5%'
  },
  x: {
    height: 15,
    width: 15,
  },
  pressX: {
    position: 'absolute',
    right: '2.5%',
  },
  inputStyle: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  contato: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#A31D42',
    borderTopWidth: 10,
    marginHorizontal: 15,
    marginVertical: 12,
    width: '80%',
    height: '12.5%',
  },
  textoContato: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#555555',
  },
  numero: {
    fontWeight: 'bold',
    fontSize: 55,
    color: '#A31D42',
    paddingBottom: '2%'
  }
});