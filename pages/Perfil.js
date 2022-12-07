import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Linking} from 'react-native';
import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Perfil({navigation}) { 
    return (
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.viewSeta}>
            <Pressable
            onPress={() => navigation.navigate("EncostAi - Menu")}>
            <Image
                style={styles.seta}
                source={require('../assets/seta_sms.png')}
            />
            </Pressable>
            </View>
            <View style={styles.viewTitle}>
            <Text style={styles.title}>Meu perfil</Text>
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
                        <Text style={styles.sbTitleCard}>{global.nome}</Text>
                    </View>
                </View>

                <View style={styles.cardInfo}>
                    <Image
                            style={styles.icon}
                            source={require('../assets/bx_id-card.png')}
                        />
                    <View>
                        <Text style={styles.titleCard}>CPF</Text>
                        <Text style={styles.sbTitleCard}>{global.cpf}</Text>
                    </View>
                </View>

                <View style={styles.cardInfo}>
                    <Image
                            style={styles.icon}
                            source={require('../assets/gridicons_phone.png')}
                        />
                    <View>
                        <Text style={styles.titleCard}>Celular</Text>
                        <Text style={styles.sbTitleCard}>{global.numero}</Text>
                    </View>
                </View>

                <View style={styles.cardInfo}>
                    <Image
                            style={styles.icon}
                            source={require('../assets/ic_outline-email.png')}
                        />
                    <View>
                        <Text style={styles.titleCard}>E-mail</Text>
                        <Text style={styles.sbTitleCard}>{global.email}</Text>
                    </View>
                </View>

                <View style={styles.cardInfo}>
                    <Image
                            style={styles.icon}
                            source={require('../assets/carbon_password.png')}
                        />
                    <View>
                        <Text style={styles.titleCard}>Senha</Text>
                        <Text style={styles.sbTitleCard}>*****</Text>
                    </View>
                </View>
            </View>

            <View style={styles.containerBtn}>
                <TouchableOpacity
                    style={styles.editarPerfil}
                    onPress={() => navigation.navigate("EncostAi - Editar perfil")}
                    underlayColor='#fff'>
                    <Text style={styles.editar}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.sairConta}
                    onPress={() => navigation.navigate("EncostAi - Login")}
                    underlayColor='#fff'>
                    <Text style={styles.sair}>Sair da conta</Text>
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
        paddingRight: '39%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    cardInfo: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 52,
        marginRight: 90,
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
        marginTop: 64,
    },
    editarPerfil: {
        backgroundColor: "#11496E",
        borderTopStartRadius:0,
        borderTopEndRadius:15,
        borderBottomStartRadius:15,
        borderBottomEndRadius:0,

        width: 131,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    sairConta: {
        backgroundColor: "#A50000",
        marginLeft: 43,
        borderTopStartRadius:0,
        borderTopEndRadius:15,
        borderBottomStartRadius:15,
        borderBottomEndRadius:0,

        width: 131,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    editar: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    sair: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    }
});