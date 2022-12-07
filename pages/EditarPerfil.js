import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, Modal, Animated, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function EditarPerfil({navigation}) {
    
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
        <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.viewSeta}>
            <Pressable
            onPress={() => navigation.navigate("EncostAi - Meu Perfil")}>
            <Image
                style={styles.seta}
                source={require('../assets/seta_sms.png')}
            />
            </Pressable>
            </View>
            <View style={styles.viewTitle}>
            <Text style={styles.title}>Editar meu perfil</Text>
            </View>
                <ModalPopUp visible={visible}>
                <View style={{alignItems: 'center'}}>
                    <View>
                        <Image
                        source={require("../assets/icon_modal_sms.png")}
                        style={styles.modalIcone}
                        />
                    </View>
                    <Text style={styles.modalTexto}>Alterações feitas</Text>
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

            <View>
                <View style={styles.cardInfo}>
                    <Image
                            style={styles.icon}
                            source={require('../assets/bx_user.png')}
                        />
                    <View>
                        <Text style={styles.titleCard}>Nome</Text>
                        <TextInput
                        placeholderTextColor={"#065B76"}
                        style={styles.input}
                        placeholder="Nome"
                        keyboardType="default"
                        />
                    </View>
                </View>

                <View style={styles.cardInfo}>
                    <Image
                            style={styles.icon}
                            source={require('../assets/gridicons_phone.png')}
                        />
                    <View>
                        <Text style={styles.titleCard}>Celular</Text>
                        <TextInput
                        placeholderTextColor={"#065B76"}
                        style={styles.input}
                        placeholder="Celular"
                        keyboardType="numeric"
                        />
                    </View>
                </View>

                <View style={styles.cardInfo}>
                    <Image
                            style={styles.icon}
                            source={require('../assets/ic_outline-email.png')}
                        />
                    <View>
                        <Text style={styles.titleCard}>E-mail</Text>
                        <TextInput
                        placeholderTextColor={"#065B76"}
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        />
                    </View>
                </View>

                <View style={styles.cardInfo}>
                    <Image
                            style={styles.icon}
                            source={require('../assets/carbon_password.png')}
                        />
                    <View>
                        <Text style={styles.titleCard}>Senha</Text>
                        <TextInput
                        placeholderTextColor={"#065B76"}
                        style={styles.input}
                        placeholder="Senha"
                        keyboardType="default"
                        secureTextEntry={true}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.containerBtn}>
                <TouchableOpacity
                    style={styles.salvarPerfil}
                    onPress={() => setVisible(true)}
                    underlayColor='#fff'>
                    <Text style={styles.salvar}>Salvar alterações</Text>
                </TouchableOpacity>
            </View>
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
      },
      title: {
        color: '#555555',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 52,
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
        paddingLeft: '9%'
      },
      viewTitle: {
        paddingRight: '30%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    cardInfo: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 52,
        marginRight: 28,
    },
    titleCard: {
        color: "#555555",
        fontSize: 16,
        marginLeft: 18,
    },
    sbTitleCard: {
        color: "#11496E",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 18,
    },
    icon: {
        width: 28,
    },
    containerBtn: {
        display: "flex",
        flexDirection: "row",
    },
    salvarPerfil: {
        backgroundColor: "#11496E",
        borderTopStartRadius:0,
        borderTopEndRadius:15,
        borderBottomStartRadius:15,
        borderBottomEndRadius:0,

        width: 260,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    salvar: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    input: {
        height: 58,
        width: 260,
        marginTop: 8,
        marginLeft: 12,
        borderRadius:10,
        padding: 10,
        backgroundColor: 'rgba(142,142,147,0.22)',
        fontSize: 16,
      },
});