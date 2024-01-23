import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login';
import SignUp from './src/pages/signup';
import Home from './src/pages/home';
import Order from "./src/pages/orders"
import { DataProvider } from './src/hooks/hooks';
export type RootStackPramList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Order: undefined;
}
const Stack = createNativeStackNavigator<RootStackPramList>()


export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}