import * as React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const HomeScreen = ({ navigation }) => {
    return (
        <View className='flex-1  justify-center items-center '>
            <LinearGradient
                className='flex-1  w-screen'
                colors={['rgba(52, 168, 83, 0.15)', 'rgba(52, 168, 83, 1)']}
                style={styles.linearGradient}
            >
                <Text className='text-[40px] text-black/[.75] font-bold'>
                    Smart Home
                </Text>
                <Image className='w-[300px]' style={styles.image} source={require('../../assets/bg-image.png')} />
                <Text className='text-[40px] text-black/[.75] font-bold'>
                    Welcome Home!
                </Text>
                <Text className='text-[16px] text-black/[.75] font-medium p-[20px]'>
                    No matter how far you go, {"\n"}
                    home will be your destination to return to.
                    Let's make your home comfortable.
                </Text>
                <TouchableOpacity
                    className='my-[22px] items-center justify-center h-[50px] w-[270px] bg-white rounded-[8px] shadow-lg'
                    style={styles.shadow}
                    onPress={() => navigation.navigate('Login')}

                >
                    <View className="flex flex-row items-center " >
                        <Text className='text-[16px] font-semibold'>Get started </Text>
                        <Icon name='verticleleft' size={16} type='antdesign' />
                    </View>

                </TouchableOpacity>
            </LinearGradient>


        </View>
    )
}

const styles = StyleSheet.create({

    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        resizeMode: 'contain'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }

})
export default HomeScreen