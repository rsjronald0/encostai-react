import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './pages/Index.js';
import Registro from './pages/Registro.js';
import Menu from './pages/Menu.js';
import Contatos from './pages/Contatos.js';
import Abrigos from './pages/Abrigos.js';
import Senha from './pages/Senha.js';
import Codigo from './pages/Codigo.js';
import Risco from './pages/Risco.js';
import SMS from './pages/SMS.js';
import NovoSMS from './pages/NovoSMS.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false,}} initialRouteName='Index'>
      <Stack.Screen name='EncostAi - Login' component={Index}/>
      <Stack.Screen name='EncostAi - Registro' component={Registro}/>
      <Stack.Screen name='EncostAi - Senha' component={Senha}/>
      <Stack.Screen name='EncostAi - Codigo' component={Codigo}/>
      <Stack.Screen name='EncostAi - Menu' component={Menu}/>
      <Stack.Screen name='EncostAi - Contatos' component={Contatos}/>
      <Stack.Screen name='EncostAi - Pontos de Risco' component={Risco}/>
      <Stack.Screen name='EncostAi - Abrigos' component={Abrigos}/>
      <Stack.Screen name='EncostAi - Receber SMS' component={SMS}/>
      <Stack.Screen name='EncostAi - Novo SMS' component={NovoSMS}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
