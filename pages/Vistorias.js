import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, Alert, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Vistorias({navigation}) {

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => {
    return state;
  });


  const fetchData = () => {
    fetch('http://192.168.0.10:3000/vistoria/')
      .then((res) => res.json())
      .then((results) => {
        results = results.vistorias;
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

  const renderList = (item) => {
    return (
      <TouchableOpacity style={styles.vistoriaPendente} onPress={() => {navigation.navigate("EncostAi - Vistoria", { item })}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.codigo}>{item.numero_solicitacao}</Text>
        <Text style={styles.data}>{item.data_abertura}</Text>
        </View>
        <Text style={styles.endereco}>{item.rua}</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.bairro}>{item.bairro}</Text>
        <Text style={styles.status}> - Pendente</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.viewSeta}>
        <Pressable
        onPress={() => navigation.navigate("EncostAi - Menu")}>
        <Image
            style={styles.seta}
            source={require('../assets/seta_vistorias.png')}
        />
        </Pressable>
        </View>
        <View style={styles.viewTitle}>
        <Text style={styles.title}>Minhas solicitações</Text>
        </View>
      </View>
      <View style={styles.vistorias}>
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
      {/* <TouchableOpacity style={styles.vistoriaPendente} onPress={() => {global.codigo = 'VIS0034203942'; global.data = '12/07/2022'; global.rua = 'Rua Divisópolis, Alto do Capitão'; global.bairro = 'Dois Unidos'; global.vistStatus='Pendente'; navigation.navigate("EncostAi - Vistoria")}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.codigo}>VIS0034203942</Text>
        <Text style={styles.data}>12/07/2022</Text>
        </View>
        <Text style={styles.endereco}>Rua Divisópolis, Alto do Capitão</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.bairro}>Dois Unidos</Text>
        <Text style={styles.status}> - Pendente</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.vistoriaAnalise} onPress={() => {global.codigo = 'VIS0065203879'; global.data = '05/07/2022'; global.rua = 'Rua dos Coquinhos, Corrego do Jenipapo'; global.bairro = 'Macaxeira'; global.vistStatus='Em análise'; navigation.navigate("EncostAi - Vistoria")}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.codigo}>VIS0065203879</Text>
        <Text style={styles.data}>05/07/2022</Text>
        </View>
        <Text style={styles.endereco}>Rua dos Coquinhos, Corrego do Jenipapo</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.bairro}>Macaxeira</Text>
        <Text style={styles.status}> - Em análise</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.vistoriaConcluida} onPress={() => {global.codigo = 'VIS0036743983'; global.data = '03/06/2022'; global.rua = 'Rua Marilia Martins, Alto do Capitão'; global.bairro = 'Dois Unidos'; global.vistStatus='Concluída'; navigation.navigate("EncostAi - Vistoria")}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.codigo}>VIS0036743983</Text>
        <Text style={styles.data}>03/06/2022</Text>
        </View>
        <Text style={styles.endereco}>Rua Marilia Martins, Alto do Capitão</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.bairro}>Dois Unidos</Text>
        <Text style={styles.status}> - Concluída</Text>
        </View>
      </TouchableOpacity> */}
      <TouchableOpacity
          style={styles.adicionar}
          onPress={() => navigation.navigate("EncostAi - Nova Vistoria")}
          underlayColor='#fff'>
          <Text style={styles.adicionarText}>Fazer solicitação</Text>
     </TouchableOpacity>
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
    paddingRight: '27.5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%'
  },
  vistorias: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '73%',
    width: '88%',
    zIndex: 15,
    elevation: 15,
  },
  vistoriaPendente: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.35,
    justifyContent: 'center',
    borderTopColor: '#DD5521',
    borderTopWidth: 10,
    width: 320,
    height: 110,
    marginBottom: 30,
  },
  vistoriaAnalise: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.35,
    justifyContent: 'center',
    borderTopColor: '#F3DE23',
    borderTopWidth: 10,
    marginHorizontal: 15,
    marginVertical: 12,
    width: '95%',
    height: '17%',
  },
  vistoriaConcluida: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.35,
    justifyContent: 'center',
    borderTopColor: '#5DDD21',
    borderTopWidth: 10,
    marginHorizontal: 15,
    marginVertical: 12,
    width: '95%',
    height: '17%',
  },
  codigo: {
    color: '#555555',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '3%',
    marginRight: '20%'
  },
  data: {
    color: '#555555',
    fontSize: 16,
  },
  endereco: {
    color: '#555555',
    fontSize: 16,
    marginBottom: '3%',
  },
  bairro: {
    color: '#555555',
    fontSize: 16,
    marginBottom: '2%'
  },
  status: {
    color: '#555555',
    fontWeight: 'bold',
    fontSize: 16,
  },
  adicionar: {
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
    width: '95%',//300,
    height: '10%',//70,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
    marginTop: '35%'
  },
  adicionarText: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontSize: 18,
    fontWeight: 'bold',
  }
});