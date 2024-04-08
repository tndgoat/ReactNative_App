import React, { useState } from 'react';
import {
    StyleSheet, View, Text, Image,
    TextInput, Button, Pressable,
    TouchableOpacity, Switch
} from 'react-native'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const LightItem = (props) => {
    const navigation = useNavigation();

    const [isEnabled, setIsEnabled] = useState(props.state == 1);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.shadow} className='flex my-1 bg-[#D8E4E8] w-[280px] h-fit space-y-[5px] justify-center py-2 px-4 rounded-[16px] items-center '>
            <View className='flex w-full flex-row items-center justify-between '>
                <TouchableOpacity onPress={() => navigation.navigate('LightSetting', { name: props.name, location: props.location, color: props.color, state: props.state, schedule: props.schedule })}>
                    <Text className="text-left font-semibold text-[#404040] text-[14px]">{props.name}</Text>
                    <Text className="text-left font-regular text-[#404040] text-[12px]">{props.location}</Text>
                </TouchableOpacity>
                <Switch
                    trackColor={{ false: '#D9D9D9', true: '#659A6E' }}
                    thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View className='flex w-full flex-row justify-between '>
                <View className='flex flex-row' >
                    <Image className='mr-4' source={require('../../assets/smallLight.png')}></Image>
                    <View className='flex flex-row justify-center items-center' >
                        <Text className="text-center font-regular text-[12px]">color </Text>
                        <Text className="text-center font-semibold text-[16px]">{props.color.currcolor}</Text>
                    </View>
                </View>
                <View className='flex space-y-[6px]'>
                    <TouchableOpacity className='bg-white p-[3px] rounded-[4px]' style={styles.shadow} >
                        <Icon name='square-edit-outline' size={18} type='material-community' />
                    </TouchableOpacity>
                    <TouchableOpacity className='bg-white p-[3px] rounded-[4px]' style={styles.shadow} >
                        <Icon name='trash-can-outline' size={18} type='material-community' />
                    </TouchableOpacity>

                </View>
            </View>
        </View>

    )
};

export default LightItem

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain'
    },
    shadow: {
        shadowColor: "#000",
        elevation: 1,
    }

})


