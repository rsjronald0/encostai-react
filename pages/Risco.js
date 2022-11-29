import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Dimensions} from 'react-native';
import React, { useState } from "react";
import MapView, { Marker } from 'react-native-maps';

const {height, width} = Dimensions.get('window');

export default function Risco({navigation}) {

    const [text, setText] = useState("");

    // navigation.geolocation.getCurrentPosition(
    //     (position) => {
    //         const currentLatitude = position.coords.latitude;
    //         this.setState({ latitude: currentLatitude });

    //         const currentLongitude = position.coords.longitude;
    //         this.setState({ longitude: currentLongitude });
    //     },
    //     (error) => alert(error.message),
    //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    // );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.viewSeta}>
        <Pressable
        style={styles.pressSeta}
        onPress={() => navigation.navigate("EncostAi - Menu")}>
        <Image
            style={styles.seta}
            source={require('../assets/seta_risco.png')}
        />
        </Pressable>
        </View>
        <View style={styles.viewTitle}>
        <Text style={styles.title}></Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Image
            source={require('../assets/search_risco.png')}
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
            source={require('../assets/x_risco.png')}
            style={styles.x}
        />
        </Pressable>
      </View>
      <StatusBar style="auto" />
      <MapView style={styles.map}
        initialRegion={{
            latitude: -8.0265924,
            longitude: -34.927216,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }}>
        <Marker
        coordinate={{
            latitude: -8.048605,
            longitude: -34.9587511
        }}
        title={'Várzea'}
        description={'Área de risco'}
        />
        <Marker
        coordinate={{
            latitude: -8.1105283,
            longitude: -34.9372484
        }}
        title={'Ibura'}
        description={'Área de risco'}
        />
        <Marker
        coordinate={{
            latitude: -7.979706753995926,
            longitude: -34.917916179582726
        }}
        title={'Passarinho'}
        description={'Área de risco'}
        />
        <Marker
        coordinate={{
            latitude: -7.953142706585612,
            longitude: -34.951201944140415
        }}
        title={'Guabiraba'}
        description={'Área de risco'}
        />
        <Marker
        coordinate={{
            latitude: -8.013036157142128,
            longitude: -34.91313375780914
        }}
        title={'Alto José Bonifacio'}
        description={'Área de risco'}
        />
        <Marker
        coordinate={{
            latitude: -8.001375376846255,
            longitude: -34.913695873668466,
        }}
        title={'Dois Unidos'}
        description={'Área de risco'}
        />
        <Marker
        coordinate={{
            latitude: -8.012802367446742,
            longitude: -34.95866089777421,
        }}
        title={'Sítio dos Pintos'}
        description={'Área de risco'}
        />
        <Marker
        coordinate={{
            latitude: -8.006644646673747,
            longitude: -34.93571397989492,
        }}
        title={'Córrego do Jenipapo'}
        description={'Área de risco'}
        />
        </MapView>
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
    paddingTop: '8%',
    zIndex: 15,
    elevation: 15,
  },
  pressSeta: {
    zIndex: 15,
    elevation: 15,
  },
  map: {
    // width: '100%',
    // height: '120%',
    height: height,
    width: width,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    zIndex: 0,
    elevation: 0,
  },
  title: {
    color: '#555555',
    fontWeight: 'bold',
    fontSize: 20,
  },
  seta: {
    zIndex: 15,
    elevation: 15,
    shadowColor: '#303838',
  },
  row: {
    flexDirection: 'row',
    zIndex: 15,
    elevation: 15,
  },
  viewSeta: {
    justifyContent: 'flex-start',
    flex: 1,
    paddingLeft: '8%',
    zIndex: 15,
    elevation: 15,
  },
  viewTitle: {
    paddingRight: '19.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    zIndex: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#CD8D00',
    borderRadius: 12,
    borderWidth: 2.6,
    borderBottomWidth: 2.6,
    alignItems: 'center',
    height: '5%',
    width: '87%',
    marginVertical: '6%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.35,
    marginBottom: '170%'
  },
  search: {
    height: 19,
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
});