import React, { useState, useEffect } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    ActivityIndicator,
} from "react-native";
import { Icon } from "react-native-elements";

const devices = [
    "Smart Light",
    "Smart Fan",
    "Smart TV",
    "Smart Door",
    "Fire Detection",
];

export default function Widget({ device, navigation }) {
    let img_link = require("../../assets/images/fire.png");
    if (device.includes("Smart Light")) {
        img_link = require("../../assets/images/smart light.png");
    } else if (device.includes("Smart Fan")) {
        img_link = require("../../assets/images/smart fan.png");
    } else if (device.includes("Smart TV")) {
        img_link = require("../../assets/images/smart tv.png");
    } else if (device.includes("Smart Door")) {
        img_link = require("../../assets/images/door.png");
    } else {
        img_link = require("../../assets/images/fire.png");
    }
    const [isEnabled, setIsEnabled] = useState(false);
    //const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
    const toggleSwitch = async () => {

        setIsEnabled(previousState => !previousState);
        console.log(isEnabled)
        const url =
            "http://thingsboard.cloud/api/v1/8nx36nkj1djnq57qdu9k/attributes";

        const requestBody = device.includes("Smart Fan")
            ? { room1_fan1: !isEnabled, room2_fan1: !isEnabled }
            : device.includes("Smart Light")
                ? { room1_light1: !isEnabled, room2_light1: !isEnabled }
                : { door: !isEnabled };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                console.error("Failed to toggle switch, status code:", response.status);

                setIsEnabled(isEnabled);
                return;
            }
        } catch (error) {
            console.error("Error: ", error);

            setIsEnabled(isEnabled);
        }
    };

    const screenMapping = {
        "Smart Light": "SmartLight",
        "Smart Fan": "SmartFan",
        "Smart TV": "SmartTV",
        "Smart Door": "Smart Door",
        "Fire Detection": "FireDetection",
    };

    const targetScreen = screenMapping[device];

    return (
        <TouchableHighlight
            className="w-[47%] rounded-3xl mt-[3%]"
            onPress={() => {
                navigation.navigate(targetScreen);
            }}
        >
            <View
                className="flex items-center px-3 py-2 h-[250px] justify-center border border-[0.1px] border-[#808080] rounded-3xl"
                style={[
                    { backgroundColor: isEnabled ? "#659A6E" : "white" },
                    { elevation: 1 },
                ]}
            >
                <Image
                    source={img_link}
                    style={{ width: "60%", height: "60%", resizeMode: "contain" }}
                />

                <View className="flex  items-left justify-center">
                    <Text
                        style={{
                            fontSize: 20,
                            color: isEnabled ? "white" : "black",
                            fontFamily: "Poppins-SemiBold",
                        }}
                    >
                        {device}
                    </Text>
                    <View className="flex flex-row justify-between w-full items-center">
                        {device != "Fire Detection" && device != "Smart Door" ? (
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: isEnabled ? "white" : "black",
                                    fontFamily: "Poppins-Regular",
                                }}
                            >
                                2 devices
                            </Text>
                        ) : (
                            <View></View>
                        )}
                        <View>
                            <Switch
                                onValueChange={() => toggleSwitch}
                                value={isEnabled}
                                trackColor={{ false: "#D9D9D9", true: "#FFF" }}
                                thumbColor={isEnabled ? "#659A6E" : "#f4f3f4"}
                            ></Switch>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
}