import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const devices = ["Smart Light", "Smart Fan", "Smart TV", "Fire Detection"];

function Widget({ device, navigation }) {
  let img_link = require("../../assets/images/fire.png");
  if (device.includes("Smart Light")) {
    img_link = require("../../assets/images/smart light.png");
  } else if (device.includes("Smart Fan")) {
    img_link = require("../../assets/images/smart fan.png");
  } else if (device.includes("Smart TV")) {
    img_link = require("../../assets/images/smart tv.png");
  } else {
    img_link = require("../../assets/images/fire.png");
  }
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const screenMapping = {
    "Smart Light": "SmartLight",
    "Smart Fan": "SmartFan",
    "Smart TV": "SmartTV",
    "Fire Detection": "FireDetection",
  };

  const targetScreen = screenMapping[device];

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(targetScreen);
      }}
    >
      <View
        style={[
          styles.widgetContent,
          { backgroundColor: isEnabled1 ? "#659A6E" : "white" },
        ]}
      >
        {device === "Fire Detection" ? (
          <Image
            source={img_link}
            style={{ width: "50%", height: "60%", resizeMode: "contain" }}
          />
        ) : (
          <Image
            source={img_link}
            style={{ width: "60%", height: "60%", resizeMode: "contain" }}
          />
        )}

        <View
          style={{
            width: 170,
            height: 54,
            paddingLeft: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: isEnabled1 ? "white" : "black",
              fontFamily: "Poppins-SemiBold",
            }}
          >
            {device}
          </Text>

          <View style={{ flexDirection: "row" }}>
            {device != "Fire Detection" ? (
              <Text
                style={{
                  fontSize: 14,
                  marginTop: 7,
                  color: isEnabled1 ? "white" : "black",
                  fontFamily: "Poppins-Regular",
                }}
              >
                4 devices
              </Text>
            ) : (
              <></>
            )}
            {device != "Fire Detection" ? (
              <View style={{ marginLeft: "15%" }}>
                <Switch
                  style={{
                    transform: [
                      { scaleX: 0.9 },
                      { scaleY: 0.8 },
                      { scale: 0.8 },
                    ],
                    borderColor: "white",
                    borderWidth: 1,
                    borderRadius: 15,
                  }}
                  onValueChange={toggleSwitch1}
                  value={isEnabled1}
                  trackColor={{ true: "#659A6E", false: null }}
                ></Switch>
              </View>
            ) : (
              <View style={{ marginLeft: "33%" }}>
                <Switch
                  style={{
                    transform: [
                      { scaleX: 0.9 },
                      { scaleY: 0.8 },
                      { scale: 0.8 },
                    ],
                    borderColor: "white",
                    borderWidth: 1,
                    borderRadius: 15,
                  }}
                  onValueChange={toggleSwitch1}
                  value={isEnabled1}
                  trackColor={{ true: "#659A6E", false: null }}
                ></Switch>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function HomePageScreen({ navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#F0F5F4" }}
    >
      <View style={styles.container}>
        {/* Weather Sensor */}
        <View style={{ flex: 0.3 }}>
          <Text
            style={{
              paddingLeft: 8,
              fontSize: 22,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Hi, Tung Nguyen
          </Text>

          {/* Board */}
          <View style={styles.boardContainer}>
            {/* Board 1 */}
            <View style={styles.board1Container}>
              <Image
                source={require("../../assets/images/cloud.png")}
                style={{ width: 80, height: 80 }}
              />
              <View style={styles.weatherInfo}>
                <Text style={{ fontFamily: "Poppins-Regular" }}>
                  January 1, 2024
                </Text>
                <Text style={{ fontFamily: "Poppins-SemiBold" }}>Cloudy</Text>
                <Text style={{ fontFamily: "Poppins-Regular" }}>
                  TP.HCM, Vietnam
                </Text>
              </View>
            </View>
            <View style={styles.board23Container}>
              {/* Board 2 */}
              <View style={styles.board2Container}>
                <View
                  style={{
                    width: 85,
                    height: 40,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={require("../../assets/images/drop of water.png")}
                    style={{ width: 38, height: 38 }}
                  />
                  <Text
                    style={{
                      fontSize: 23,
                      marginLeft: 5,
                      marginTop: 3,
                      fontFamily: "Poppins-SemiBold",
                    }}
                  >
                    60%
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 14,
                    marginTop: 2,
                    fontFamily: "Poppins-Regular",
                  }}
                >
                  Humidity
                </Text>
              </View>

              {/* Board 3 */}
              <View style={styles.board3Container}>
                <View
                  style={{
                    width: 85,
                    height: 40,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={require("../../assets/images/temperature.png")}
                    style={{ width: 38, height: 38 }}
                  />
                  <Text
                    style={{
                      fontSize: 23,
                      marginLeft: 5,
                      marginTop: 3,
                      fontFamily: "Poppins-SemiBold",
                    }}
                  >
                    27
                  </Text>
                  <Text style={{ fontSize: 16, marginLeft: 2 }}>°</Text>
                  <Text
                    style={{
                      fontSize: 23,
                      marginLeft: -4,
                      marginTop: 3,
                      fontFamily: "Poppins-SemiBold",
                    }}
                  >
                    C
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 14,
                    marginTop: 2,
                    fontFamily: "Poppins-Regular",
                  }}
                >
                  Temperature
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Widgets */}
        <View
          style={{
            flex: 0.7,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {devices.map((device, index) => (
            <View key={index}>
              <Widget device={device} navigation={navigation} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  widgetContent: {
    width: "100%",
    height: 250,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginVertical: 10,
    margin: 5,
  },
  container: {
    flexDirection: "column",
    height: 800,
    flex: 1,
    paddingTop: 60,
    padding: 15,
  },
  boardContainer: {
    backgroundColor: "#D8E4E8",
    marginTop: 5,
    flex: 1,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "white",
    flexDirection: "row",
  },
  board1Container: {
    marginTop: 42,
    marginLeft: 18,
    width: 232,
    height: 100,
    flexDirection: "row",
  },
  weatherInfo: {
    flexDirection: "column",
    width: 125,
    height: 80,
    marginLeft: 10,
    marginTop: 10,
    flex: 1,
  },
  board23Container: {
    marginLeft: 10,
    flexDirection: "column",
    width: "30%",
    height: 150,
    marginLeft: -3,
    marginTop: 10,
  },
  board2Container: {
    backgroundColor: "#F0F5F4",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 8,
  },
  board3Container: {
    backgroundColor: "#F0F5F4",
    flex: 1,
    marginTop: 7,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
