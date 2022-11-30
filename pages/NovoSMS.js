import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, Modal, Animated, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';

export default function NovoSMS({navigation}) {

  const ModalPopUp = ({visible,children}) => {
    const [showModal, setShowModal] = React.useState(visible)

    const scaleValue = React.useRef( new Animated.Value(0)).current;

    React.useEffect(() => {
        toggleModal();
    }, [visible]);

    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            }).start();
        }
    }
    return (
    <Modal transparent visible = {showModal}>
        <View style={styles.modalBackground}>
            <Animated.View style={[styles.modalContainer, {transform: [{scale:scaleValue}]}]}>
                {children}
            </Animated.View>
        </View>
    </Modal>
    );
  };

  const [visible, setVisible] = React.useState(false);

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.viewSeta}>
        <Pressable
        onPress={() => navigation.navigate("EncostAi - Receber SMS")}>
        <Image
            style={styles.seta}
            source={require('../assets/seta_sms.png')}
        />
        </Pressable>
        </View>
        <View style={styles.viewTitle}>
        <Text style={styles.title}>Novo número</Text>
        <ModalPopUp visible={visible}>
            <View style={{alignItems: 'center'}}>
                <View>
                    <Image
                      source={require("../assets/icon_modal.png")}
                      style={styles.modalIcone}
                    />
                </View>
                <Text style={styles.modalTexto}>Número cadastrado</Text>
                <Text style={styles.modalTexto}>com sucesso!</Text>
                <TouchableOpacity
                style={styles.modalOk}
                onPress={() => setVisible(false)}
                underlayColor='#fff'>
                <Text style={styles.textoOK}>OK</Text>
                </TouchableOpacity>
            </View>
        </ModalPopUp>
        </View>
      </View>
      <View style={styles.numeros}>
      <TextInput
        placeholderTextColor={"#065B76"}
        style={styles.input}
        placeholder="Número do telefone"
        keyboardType="numeric"
      />
      <TextInput
        placeholderTextColor={"#065B76"}
        style={styles.input}
        placeholder="CEP"
        keyboardType="numeric"
      />
      <TextInput
        placeholderTextColor={"#065B76"}
        style={styles.input}
        placeholder="Endereço"
        keyboardType="default"
      />
      <TextInput
        placeholderTextColor={"#065B76"}
        style={styles.input}
        placeholder="Bairro"
        keyboardType="default"
      />
      <TouchableOpacity
      style={styles.cadastrar}
      onPress={() => setVisible(true)}
      underlayColor='#fff'>
      <Text style={styles.textoCadastrar}>Cadastrar</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignContent: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 20,
    zIndex: 20,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  modalIcone: {
    height: 60,
    width: 66,
    marginBottom: '5%'
  },
  modalTexto: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 25
  },
  modalOk: {
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#0868A2',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#fff',
    width: 130,
    height: 45,
    justifyContent: 'center',
    marginTop: '6%'
  },
  textoOK: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
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
    position: 'absolute',
    left: 0,
    right: 0,
    paddingBottom: '165%',
    zIndex: 10,
    elevation: 10,
  },
  viewSeta: {
    justifyContent: 'flex-start',
    flex: 1,
    paddingLeft: '8%'
  },
  viewTitle: {
    paddingRight: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%'
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
    borderTopColor: '#0868A2',
    borderTopWidth: 10,
    marginHorizontal: 15,
    marginVertical: 12,
    width: '100%',
    height: '16%',
  },
  numeros: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '75%',
    width: '100%',
    zIndex: 15,
    elevation: 15,
  },
  input: {
    height: '10%',
    width: '75%',
    margin: 12,
    borderRadius:10,
    padding: 10,
    backgroundColor: 'rgba(142,142,147,0.22)',
    fontSize: 16,
  },
  cadastrar: {
    marginRight:40,
    marginLeft:40,
    marginTop:15,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#0868A2',
    borderTopStartRadius:0,
    borderTopEndRadius:25,
    borderBottomStartRadius:25,
    borderBottomEndRadius:0,
    borderWidth: 1,
    borderColor: '#fff',
    width: '35%',
    height: '8%',
    justifyContent: 'center',
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.35,
    marginTop: '8%'
  },
  textoCadastrar: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontSize: 18,
    fontWeight: 'bold',
  }
});