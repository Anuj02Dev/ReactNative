import React, { useEffect, useState } from "react";
import { StatusBar, View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from 'react-native-paper';
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native";
import ModalImg from "./ModalImg";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = ({ onPressDrawer = () => { } }) => {

    const Navigation = useNavigation()
    const [name, setName] = useState('')

    const readData = async () => {

        const value = await AsyncStorage.getItem('userIdName');
        setName(await JSON.parse(value))
        // console.warn(v1)
    }

    useEffect(() => {
        readData()
    })

    return (
        <View style={{ height: 45, width: "100%", }}>

            <StatusBar
                animated={true}
                backgroundColor={"black"}
                hidden={false}
                barStyle="light-content"
            />

            <View style={style.headerDiv}>

                <View style={{ width: "15%", alignItems: 'center', }}>

                    <TouchableOpacity
                        onPress={onPressDrawer}
                        style={{}}
                    >
                        <Octicons name="three-bars" size={23} color={'white'} />

                    </TouchableOpacity>

                </View>

                <View style={{ width: "70%", alignItems: 'center', }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>{name}🌻</Text>
                </View>

                <View style={{ alignItems: 'center', width: "15%", }} >

                    <TouchableOpacity onPress={() => Navigation.navigate(ModalImg)}>
                        <Ionicons name="play" size={23} color={'white'} />
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )

}

const style = StyleSheet.create({

    headerDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
        shadowColor: 'white',
        elevation: 80
    }

})

export default Header