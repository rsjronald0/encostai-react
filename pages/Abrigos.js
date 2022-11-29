
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Linking} from 'react-native';
import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Abrigos({navigation}) {

    const [text, setText] = useState("");

    return (
        <SafeAreaView>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={styles.row}>
                            <View style={styles.viewSeta}>
                                <Pressable
                                onPress={() => navigation.navigate("EncostAi - Menu")}>
                                    <Image
                                    style={styles.seta}
                                    source={require('../assets/seta_abrigos.png')}
                                    />
                                </Pressable>
                            </View>
                            <View style={styles.viewTitle}>
                                <Text style={styles.title}>Abrigos</Text>
                            </View>
                        </View>

                        <View style={styles.searchContainer}>
                            <Image
                                source={require('../assets/search-abrigos.png')}
                                style={styles.search}
                            />
                            <TextInput
                                style={styles.inputStyle}
                                autoCorrect={true}
                                placeholderTextColor={"#555555"}
                                placeholder="Onde você está?"
                                value={text}
                                onChangeText={(value) => setText(value)}
                                />
                            <Pressable style={styles.pressX} onPress={() => setText("")}>
                                <Image
                                    source={require('../assets/x-abrigos.png')}
                                    style={styles.x}
                                />
                            </Pressable>
                        </View>

                            <TouchableOpacity style={styles.abrigo} onPress={() => { 
      Linking.openURL('https://maps.google.com/?q=Escola%20Municipal%20Professor%20Adauto%20Pontes'); 
    }}>
                                <Image source={require('../assets/abrigo1.png')}/>
                                <Text style={styles.titleAbrigo}>Escola Municipal Adauto Pontes</Text>
                                <Text style={styles.descriptionAbrigo}>R. Sertânia, 35, Jordão Alto, Recife - PE</Text>
                                <Text style={styles.descriptionAbrigo}>(81) 9897-0897</Text>
                            </TouchableOpacity>

                        <TouchableOpacity style={styles.abrigo} onPress={() => { 
      Linking.openURL('https://maps.google.com/?q=Rua%20Tucum%C3%A3,%2012'); 
    }}>
                            <Image source={require('../assets/abrigo2.png')} />
                            <Text style={styles.titleAbrigo}>Igreja Orai</Text>
                            <Text style={styles.descriptionAbrigo}>R. Tucumã, 127, Ibura, Recife - PE</Text>
                            <Text style={styles.descriptionAbrigo}>(81) 8254-6420</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.abrigo}>
                            <Image source={require('../assets/abrigo1.png')}/>
                            <Text style={styles.titleAbrigo}>Santa Casa</Text>
                            <Text style={styles.descriptionAbrigo}>Rua da paixão, 120, Pina, Recife - PE</Text>
                            <Text style={styles.descriptionAbrigo}>(81) 9897-0897</Text>
                        </TouchableOpacity>


                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '9%',
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
        paddingRight: '40%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      searchContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#2C5F2E',
        borderRadius: 12,
        borderWidth: 2.6,
        borderBottomWidth: 2.6,
        alignItems: 'center',
        height: 32,
        width: '80%',
        marginVertical: '6%',
        paddingLeft: '10%',
      },
      search: {
        height: 20,
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
      },
      abrigo: {
        marginTop: 14,
      },
      titleAbrigo: {
        fontSize: 16,
        marginTop: 4,
        fontWeight: 'bold',
      },
      descriptionAbrigo: {
        fontSize: 14,
        marginBottom: 4,
      }
});