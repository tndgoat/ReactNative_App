import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen.js'
import Login from './src/screen/Login.js'
import SignUp from './src/screen/SignUp.js';
import SmartLightControl from './src/screen/SmartLightControl.js';
import SmartTVControl from './src/screen/SmartTVControl.js';
import SmartLightSetting from './src/screen/SmartLightSetting.js';
import SmartTVSetting from './src/screen/SmartTVSetting.js';
import VoiceControl from './src/screen/VoiceControl.js';
import NavigationScreen from './src/screen/NavigationScreen.js';
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
            title: 'Smart TV',
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
          name="SmartTV" component={SmartTVControl} />
        <Stack.Screen
          options={{
            title: 'Smart TV Setting',
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
          name="SmartTVSetting" component={SmartTVSetting} />
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




        <Stack.Screen
          options={{
            title: 'Voice Control',
            // headerTransparent: true,
            headerStyle: {
              backgroundColor: '#F0F5F4',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="VoiceControl" component={VoiceControl} />

        <Stack.Screen
          options={{
            title: 'Navigation Screen',
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
          name="NavScreen" component={NavigationScreen} />
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
