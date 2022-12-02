import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Linking} from 'react-native';
import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EditarPerfil({navigation}) { 

    return (
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
                    onPress={() => navigation.navigate("EncostAi - Editar perfil")}
                    underlayColor='#fff'>
                    <Text style={styles.salvar}>Salvar alterações</Text>
                </TouchableOpacity>
            </View>
        </View>
      );

}

const styles = StyleSheet.create({ 
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