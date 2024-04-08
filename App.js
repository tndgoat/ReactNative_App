import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen.js'
import Login from './src/screen/Login.js'
import SignUp from './src/screen/SignUp.js';
import SmartLightControl from './src/screen/SmartLightControl.js';
import SmartLightSetting from './src/screen/SmartLightSetting.js';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
        <Stack.Screen
          options={{
            title: 'Smart Light',
            // headerTransparent: true,

            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#F0F5F4',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="SmartLight" component={SmartLightControl} />
        <Stack.Screen
          options={{
            title: 'Light Setting',
            // headerTransparent: true,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#F0F5F4',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="LightSetting" component={SmartLightSetting} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
);
