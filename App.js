import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/HomeScreen.js";
import Login from "./src/screen/Login.js";
import SignUp from "./src/screen/SignUp.js";
import SmartLightControl from "./src/screen/SmartLightControl.js";
import SmartLightSetting from "./src/screen/SmartLightSetting.js";
import HomePageScreen from "./src/screen/HomePageScreen.js";
import VoiceControlScreen from "./src/screen/VoiceControlScreen.js";
import MyHomeAccountStack from "./src/screen/MyHomeAccountStack.js";

import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import OctIcon from "react-native-vector-icons/Octicons";
import TabNavigator from "./src/screen/TabNavigator.js";
import SmartTVControl from "./src/screen/SmartTVControl.js";
import SmartTVSetting from "./src/screen/SmartTVSetting.js";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TabNavigator"
          component={TabNavigator}
        />
        <Stack.Screen
          options={{
            title: "Smart Light",
            // headerTransparent: true,
            headerBackTitleVisible: false,
            headerTintColor: "black",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F0F5F4",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="SmartLight"
          component={SmartLightControl}
        />
        <Stack.Screen
          options={{
            title: "Light Setting",
            // headerTransparent: true,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F0F5F4",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="LightSetting"
          component={SmartLightSetting}
        />
        <Stack.Screen
          options={{
            title: "Smart TV",
            // headerTransparent: true,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F0F5F4",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="SmartTV"
          component={SmartTVControl}
        />

        <Stack.Screen
          options={{
            title: "Smart TV Setting",
            // headerTransparent: true,

            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F0F5F4",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="SmartTVSetting"
          component={SmartTVSetting}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
