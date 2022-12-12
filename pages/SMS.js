import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function SMS({navigation}) {

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => {
    return state;
  });

  const renderList = (item) => {
    const ender = `${item.endereco} - ${item.bairro}`
    return (
      <TouchableOpacity style={styles.contato} activeOpacity={1}>
      <Text style={styles.numero}>{item.numero}</Text>
      <Text style={styles.endereco}>{ender}</Text>
      <Text style={styles.status}>Número validado</Text>
    </TouchableOpacity>
    );
  };

  const fetchData = () => {
    fetch('http://192.168.0.10:3000/sms/')
      .then((res) => res.json())
      .then((results) => {
        results = results.sms;
        let userRes = [];
        for (let r of results) {
          if (r.id_usuario == global.id) {
            userRes.push(r)
          }
        }
        dispatch({ type: 'ADD_DATA', payload: userRes });
        dispatch({ type: 'SET_LOADING', payload: false });
      })
      .catch((err) => {
        Alert.alert('someting went wrong');
      });
  };

  useEffect(() => {
    fetchData();
  }, [data]);


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
        <Text style={styles.title}>Receber SMS</Text>
        </View>
      </View>
      <View style={styles.numeros}>
      <View style={{height: '70%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: '100%'}}>
      <FlatList
        data={data}
        style={{width: '90%', height: '100%'}}
        contentContainerStyle={{alignItems: 'center'}}
        renderItem={({ item }) => {
          return renderList(item);
        }}
        keyExtractor={(item) => item._id}
        onRefresh={() => fetchData()}
        refreshing={loading}
        removeClippedSubviews={false}
      />
      </View>
      {/* <TouchableOpacity style={styles.contato}>
        <Text style={styles.numero}>(81)98555-4432</Text>
        <Text style={styles.endereco}>Rua Divisópolis, Alto do Capitão - Dois Unidos</Text>
        <Text style={styles.status}>Número validado</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contato}>
        <Text style={styles.numero}>(81)98405-6522</Text>
        <Text style={styles.endereco}>Rua Elias Gomes, Pina - Recife</Text>
        <Text style={styles.status}>Número validado</Text>
      </TouchableOpacity> */}
      <Text style={styles.adicionar} onPress={() => navigation.navigate("EncostAi - Novo SMS")}>Adicionar novo número</Text>
      </View>
      <StatusBar style="auto" />
    </View>
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
    width: 320,
    height: 100,
  },
  numeros: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '73%',
    width: '88%',
    zIndex: 15,
    elevation: 15,
  },
  numero: {
    color: '#555555',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: '1%'
  },
  endereco: {
    color: '#555555',
    fontSize: 15,
    marginBottom: '1%',
  },
  status: {
    color: '#2B860B',
    fontSize: 15,
    marginBottom: '2%'
  },
  adicionar: {
    color: '#0868A2',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: '8%',
    zIndex: 15,
    elevation: 15,
  }
});