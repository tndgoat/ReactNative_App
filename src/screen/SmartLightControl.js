import React, { useState } from 'react';
import { Modal, StyleSheet, View, Text, Image, TextInput, Button, Pressable, TouchableOpacity, ScrollView, } from 'react-native'
import { Shadow } from 'react-native-shadow-2';
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LightItem from '../component/LightItem';
import RadioButton from '../component/RadioButton';

const SmartLightControl = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState('option1');
    const [option, setOption] = useState(null);
    const data = [
        {
            name: 'Smart Light 1',
            location: 'Bedroom',
            color: { num: 2, currcolor: 1 },

            state: 1,
            schedule: [
                { day: ['Mon', 'Fri'], time: ['18', '00', '22', '30'] },
                { day: ['Tue', 'Fri'], time: ['12', '00', '22', '30'] },
                { day: ['Thu', 'Fri'], time: ['11', '00', '22', '30'] },
                { day: ['Mon', 'Fri'], time: ['18', '00', '22', '30'] },
                { day: ['Tue', 'Fri'], time: ['12', '00', '22', '30'] },
                { day: ['Thu', 'Fri'], time: ['11', '00', '22', '30'] },
                { day: ['Mon', 'Fri'], time: ['18', '00', '22', '30'] },
                { day: ['Tue', 'Fri'], time: ['12', '00', '22', '30'] },
                { day: ['Thu', 'Fri'], time: ['11', '00', '22', '30'] },
            ]
        },
        {
            name: 'Smart Light 2',
            location: 'Bedroom',
            color: { num: 3, currcolor: 2 },

            state: 1,
            schedule: [
                { day: ['Mon', 'Fri'], time: ['18', '00', '22', '30'] },
                { day: ['Tue', 'Fri'], time: ['12', '00', '22', '30'] },
                { day: ['Thu', 'Fri'], time: ['11', '00', '22', '30'] },
            ]

        },
        {
            name: 'Smart Light 3',
            location: 'Bedroom',
            color: { num: 2, currcolor: 1 },

            state: 0,
            schedule: [
                // { day: ['Mon', 'Fri'], time: ['18', '00', '22', '30'] },
                // { day: ['Tue', 'Fri'], time: ['12', '00', '22', '30'] },
                // { day: ['Thu', 'Fri'], time: ['11', '00', '22', '30'] },
            ]
        },
        {
            name: 'Smart Light 4',
            location: 'Bedroom',
            color: { num: 3, currcolor: 3 },

            state: 1,
            schedule: [
                { day: ['Mon', 'Fri'], time: ['18', '00', '22', '30'] },
                // { day: ['Tue', 'Fri'], time: ['12', '00', '22', '30'] },
                // { day: ['Thu', 'Fri'], time: ['11', '00', '22', '30'] },
            ]

        },
        {
            name: 'Smart Light 5',
            location: 'Bedroommmm',
            color: { num: 2, currcolor: 1 },
            state: 0,
            schedule: [
                { day: ['Mon', 'Fri'], time: ['18', '00', '22', '30'] },
                { day: ['Tue', 'Fri'], time: ['12', '00', '22', '30'] },
                { day: ['Thu', 'Fri'], time: ['11', '00', '22', '30'] },
            ]

        }, {
            name: 'Smart Light 6',
            location: 'Bedroommmm',
            color: { num: 3, currcolor: 1 },

            state: 1,
            schedule: [
                { day: ['Mon', 'Fri'], time: ['18', '00', '22', '30'] },
                { day: ['Tue', 'Fri'], time: ['12', '00', '22', '30'] },
                { day: ['Thu', 'Fri'], time: ['11', '00', '22', '30'] },
            ]

        },
    ]
    const mode = [
        { value: 'One color' },
        { value: 'Two colors' },
        { value: 'Three colors' },
    ];
    const handleSubmit = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View className='flex  flex-1 min-h-screen bg-[#F0F5F4]  items-center'>

                <View className=' py-4 grow  items-center bg-white w-full rounded-t-[30px] mt-[20px]' style={styles.shadow}>
                    <View className="flex flex-row justify-between w-full px-[50px] pb-4">
                        <View className='flex flex-row items-center space-x-1' >
                            <Text className='text-[18px] font-semibold'>Device</Text>
                            <View className='flex items-center justify-center bg-[#4C7380] w-[23px] h-[23px] rounded-md'>
                                <Text className='text-[14px] text-white font-semibold'>{data.length}</Text>
                            </View>
                        </View>
                        <View className='flex flex-row space-x-2'>
                            <Text className='text-[18px] font-semibold'>Add</Text>
                            <TouchableOpacity className='bg-white p-[3px] rounded-[4px]'
                                style={{ elevation: 2 }}
                                onPress={() => setModalVisible(true)}>
                                <Icon name='plus' color={'#4C7380'} size={18} type='material-community' />
                            </TouchableOpacity>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    // Alert.alert('Modal has been closed.');
                                    setModalVisible(!modalVisible);
                                }}>
                                <View className='flex flex-1 justify-end bg-[#000]/[.2]'>
                                    <View className=' items-center space-y-5 pb-2 pt-4 bg-white w-full rounded-t-[30px] ' style={{ elevation: 2 }}>
                                        <View className='w-[90%] pb-1 border-b-[1px]' >
                                            <Text className='text-[18px] font-semibold'>Schedule</Text>

                                        </View>
                                        <View className='space-y-3  justify-center items-center'>
                                            <View className="flex justify-center w-[275px] h-[40px] px-4 rounded-lg bg-white border border-[1px] border-gray-400">
                                                <TextInput placeholder="Enter your light's name" />
                                            </View>
                                            <View className="flex justify-center w-[275px]  h-[40px] px-4 rounded-lg bg-white border border-[1px] border-gray-400">
                                                <TextInput placeholder="Select position" />
                                            </View>
                                            <View>
                                                <RadioButton className='flex flex-row' data={mode} onSelect={(value) => setOption(value)} />
                                            </View>
                                        </View>
                                        <View className='flex  w-[90%] flex-row space-x-3  items-left'>
                                            <Pressable
                                                className='border border-1 px-3 py-1 rounded-md'
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => setModalVisible(!modalVisible)}>
                                                <Text style={styles.textStyle}>Cancel</Text>
                                            </Pressable>
                                            <TouchableOpacity
                                                className='bg-[#107ADB] px-3 py-1 rounded-md'
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => handleSubmit()}>
                                                <Text className='font-medium text-white'>Save</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>

                                </View>
                            </Modal>
                        </View>
                    </View>
                    {data.map((light, index) => (
                        <LightItem key={index} name={light.name} location={light.location} color={light.color} state={light.state} schedule={light.schedule}></LightItem>
                    ))}



                </View>

            </View>
        </ScrollView >



    );
};
const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain'
    },
    shadow: {
        shadowColor: "#000",
        elevation: 2,
    }

})
export default SmartLightControl