import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, Modal, Animated, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



export default function NovaVistoria({navigation, route}) {

  const handleUpload = async (image) => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'qwyetusc');
    data.append('cloud_name', 'do4495drx');
    let result;

    await fetch('https://api.cloudinary.com/v1_1/do4495drx/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        result = data.url
      })
      .catch((err) => {
        Alert.alert('erro durante o upload');
      });
    
    return result;
  };

  const [hasGalleryPermission, setHasGalleryPermission] = React.useState(null);
  const [image, setImage] = React.useState(null);

  useEffect(() => {
    (async() => {
        const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const pickImage = async() => {
    try {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });
    
        let newFile = {
          uri: result.assets[0].uri,
          type: `test/${result.assets[0].uri.split('.')[1]}`,
          name: `test.${result.assets[0].uri.split('.')[1]}`,
        }

        setImage(newFile);
    
        if (hasGalleryPermission === false) {
            return <Text>Sem acesso à galeria interna</Text>
        }
      }
    catch(e) {
        console.log(e);
    }
    }


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

  const getDetails = (type) => {
    if (route.params) {
      switch (type) {
        case 'cpf':
          return route.params.cpf;
        case 'cep':
          return route.params.cep;
        case 'rua':
          return route.params.rua;
        case 'bairro':
          return route.params.bairro;
        case 'descricao':
          return route.params.descricao;
      }
    }
    return '';
  };

  const [cep, setCep] = useState(getDetails('cep'));
  const [rua, setRua] = useState(getDetails('rua'));
  const [bairro, setBairro] = useState(getDetails('bairro'));
  const [descricao, setDescricao] = useState(getDetails('descricao'));    

  const submitData = async () => {
    const numero_solicitacao = vistCode();
    const data_abertura = getDate();
    const imagem = await handleUpload(image);
    fetch('http://192.168.0.10:3000/vistoria/add', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imagem,
        rua,
        descricao,
        numero_solicitacao,
        data_abertura,
        cep,
        status: 'Pendente',
        id_usuario: global.id,
        bairro
      }),
    })
      .then((res) => res.json())
      .then((data) => {
      })
      .catch((err) => {
        Alert.alert('Alguma coisa deu errado' + err);
      });
  };

  const getDate = () => {
    var temp = new Date();
    var dateStr = padStr(temp.getDate()) + '/' +
                  padStr(1 + temp.getMonth()) + '/' +
                  padStr(temp.getFullYear())
    return dateStr;
  }

  const vistCode = () => {
    let prefix = 'VIS'
    let numeros = [];
    for (let i = 0; i < 10; i++) {
      numeros[i] = Math.floor(Math.random() * 10);
    }

    for (let n of numeros) {
      prefix = prefix.concat(n);
    }

    return prefix;
  }

  function padStr(i) {
    return (i < 10) ? "0" + i : "" + i;
}

  return (
  <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.viewSeta}>
        <Pressable
        onPress={() => navigation.navigate("EncostAi - Vistorias")}>
        <Image
            style={styles.seta}
            source={require('../assets/seta_vistorias.png')}
        />
        </Pressable>
        </View>
        <View style={styles.viewTitle}>
        <Text style={styles.title}>Solicitar Vistoria</Text>
        <ModalPopUp visible={visible}>
            <View style={{alignItems: 'center'}}>
                <View>
                    <Image
                      source={require("../assets/icon_modal_vistoria.png")}
                      style={styles.modalIcone}
                    />
                </View>
                <Text style={styles.modalTexto}>Vistoria solicitada</Text>
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
      <View style={styles.dados}>
      <TextInput
        placeholderTextColor={"#DD5521"}
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
      />
      <TextInput
        placeholderTextColor={"#DD5521"}
        style={styles.input}
        placeholder="CEP"
        keyboardType="numeric"
        onChangeText={(text) => setCep(text)}
      />
      <TextInput
        placeholderTextColor={"#DD5521"}
        style={styles.input}
        placeholder="Rua"
        keyboardType="default"
        onChangeText={(text) => setRua(text)}
      />
      <TextInput
        placeholderTextColor={"#DD5521"}
        style={styles.input}
        placeholder="Bairro"
        keyboardType="default"
        onChangeText={(text) => setBairro(text)}
      />
      <TextInput
        placeholderTextColor={"#DD5521"}
        style={styles.description}
        placeholder="Descrição"
        keyboardType="default"
        onChangeText={(text) => setDescricao(text)}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems: 'center'}}>
      <Text style={styles.selecionarImg} onPress={() => pickImage()}>Selecionar Imagem</Text>
      {image && <Image style={styles.imgSelecionada} source={{uri:image.uri}}/>}
      </View>
      <TouchableOpacity
      style={styles.enviar}
      onPress={() => {submitData();setVisible(true)}}
      underlayColor='#fff'>
      <Text style={styles.textoEnviar}>Enviar</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
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
    backgroundColor:'#DD5521',
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
    paddingRight: '30.5%',
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
  dados: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '75%',
    width: '100%',
    zIndex: 15,
    elevation: 15,
  },
  input: {
    height: '10%',
    width: '80%',
    margin: 12,
    borderRadius:10,
    padding: 10,
    backgroundColor: 'rgba(142,142,147,0.22)',
    fontSize: 16,
  },
  description: {
    height: '15%',
    width: '80%',
    margin: 12,
    borderRadius:10,
    padding: 10,
    backgroundColor: 'rgba(142,142,147,0.22)',
    fontSize: 16,
    paddingBottom: '14%'
  },
  selecionarImg: {
    color: '#DD5521',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: '3%',
  },
  imgSelecionada: {
    width: 100,
    height: 100,
    left: '10%',
  },
  enviar: {
    marginRight:40,
    marginLeft:40,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#DD5521',
    borderTopStartRadius:0,
    borderTopEndRadius:15,
    borderBottomStartRadius:15,
    borderBottomEndRadius:0,
    borderWidth: 1,
    borderColor: '#DD5521',
    width: '85%',//300,
    height: '10%',//70,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
    marginTop: '2%'
  },
  textoEnviar: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontSize: 18,
    fontWeight: 'bold',
  }
});