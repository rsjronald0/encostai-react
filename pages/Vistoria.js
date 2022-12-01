import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';

export default function Vistoria({navigation}) {
  return (
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
        <Text style={styles.title}>{global.codigo}</Text>
        </View>
      </View>
      <View style={styles.dados}>
      <Text style={styles.header}>Data de abertura</Text>
      <Text style={styles.info}>{global.data}</Text>
      <Text style={styles.header}>Rua</Text>
      <Text style={styles.info}>{global.rua}</Text>
      <Text style={styles.header}>Bairro</Text>
      <Text style={styles.info}>{global.bairro}</Text>
      <Text style={styles.header}>Descrição</Text>
      <Text style={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nulla nisl, facilisis ut ligula sed, ultricies feugiat elit. Cras sit.</Text>
      <Text style={styles.header}>Foto do local</Text>
      <Text style={styles.info}>Nenhuma imagem anexada.</Text>
      <Text style={styles.header}>Status</Text>
      <Text style={styles.info}>{global.vistStatus}</Text>
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
    top: '20%',
    bottom: 0,
    right: 0,
    left: '5%',
    alignSelf: 'center'
  }
});