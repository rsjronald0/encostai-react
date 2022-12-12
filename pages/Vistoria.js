import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function Vistoria(props) {

  const { _id, imagem, rua, descricao, numero_solicitacao, data_abertura, status, bairro, cep, cpf } = props.route.params.item;

  const item = { _id, imagem, rua, descricao, numero_solicitacao, data_abertura, status, bairro, cep, cpf };

  const getImg = (imagem) => {
      if (!imagem || imagem == null || imagem == 'undefined' || imagem == '') {
        return (
          <Text style={styles.info}>Nenhuma imagem anexada.</Text>
        )
      }
      else {
        return (
          imagem && <Image style={{width: 250, height: 150, marginBottom: '6%'}} source={{uri:imagem}}/>
        )
      }
  }

  const excluirAlert = () => {
    Alert.alert(
      "Excluir vistoria",
      "Tem certeza que deseja excluir esta vistoria?",
      [
        {
          text: "CANCELAR",
          // onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "SIM", onPress: async () => await excluirVistoria() }
      ]
    );
  }

  const excluirVistoria = async () => {
    await fetch(`http://192.168.0.10:3000/vistoria/delete/${_id}`, {
      method: "delete",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          id: _id
      })
  })
      .then(res => res.json())
      .then(vistExcluida => {
          Alert.alert(`Vistoria ${numero_solicitacao} foi deletada!`)
          props.navigation.navigate("EncostAi - Vistorias")
      })
      .catch(err => {
          Alert.alert("Alguma coisa deu errado")
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.viewSeta}>
        <Pressable
        onPress={() => props.navigation.navigate("EncostAi - Vistorias")}>
        <Image
            style={styles.seta}
            source={require('../assets/seta_vistorias.png')}
        />
        </Pressable>
        </View>
        <View style={styles.viewTitle}>
        <Text style={styles.title}>{numero_solicitacao}</Text>
        </View>
      </View>
      <View style={styles.dados}>
      <Text style={styles.header}>Data de abertura</Text>
      <Text style={styles.info}>{data_abertura}</Text>
      <Text style={styles.header}>Rua</Text>
      <Text style={styles.info}>{rua}</Text>
      <Text style={styles.header}>Bairro</Text>
      <Text style={styles.info}>{bairro}</Text>
      <Text style={styles.header}>Descrição</Text>
      <Text style={styles.info}>{descricao}</Text>
      <Text style={styles.header}>Foto do local</Text>
      {getImg(imagem)}
      <Text style={styles.header}>Status</Text>
      <Text style={styles.info}>{status}</Text>
      </View>
      <TouchableOpacity
          style={styles.editar}
          onPress={() => props.navigation.navigate("EncostAi - Editar Vistoria", {item})}
          underlayColor='#fff'>
          <Text style={styles.editarText}>Editar solicitação</Text>
     </TouchableOpacity>
     <TouchableOpacity
          style={styles.excluir}
          onPress={() => excluirAlert()}
          underlayColor='#fff'>
          <Text style={styles.excluirTexto}>Excluir solicitação</Text>
     </TouchableOpacity>
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
    paddingRight: '31.5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%'
  },
  header: {
    color: '#555555',
    fontSize: 18,
    marginBottom: '2%'
  },
  info: {
    color: '#DD5521',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '6%'
  },
  dados: {
    position: 'absolute',
    top: '17.5%',
    bottom: 0,
    right: 0,
    left: '5%',
    alignSelf: 'center'
  },
  editar: {
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
    height: '7%',//70,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
    marginTop: '160%',
    zIndex: 20,
    elevation: 20,
  },
  editarText: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  excluir: {
    marginRight:40,
    marginLeft:40,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#A50000',
    borderTopStartRadius:0,
    borderTopEndRadius:15,
    borderBottomStartRadius:15,
    borderBottomEndRadius:0,
    borderWidth: 1,
    borderColor: '#DD5521',
    width: '95%',//300,
    height: '7%',//70,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
    marginTop: '5%',
  },
  excluirTexto: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontSize: 18,
    fontWeight: 'bold',
  }
});