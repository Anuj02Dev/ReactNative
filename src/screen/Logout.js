import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, ImageBackground, } from "react-native";

const Logout = () => {

    const Navigation = useNavigation()
    const intervalRef = useRef()
    const [visible, setVisible] = useState(false)
    const [isLogout, setIsLogout] = useState(true)
    const showModal = () => setVisible(true)
    const hideModal = () => setVisible(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLogout(false);
        }, 700);
    }, []);

    return (

        <>
            {
                isLogout ? (

                    <View style={{ flex: 1, }}>
                        <ImageBackground source={require('../Constants/Images/petGif2.gif')} style={{ flex: 1 }} />
                    </View>

                ) : (

                    <View>
                        <TouchableOpacity onPress={Navigation.navigate('Login')} />
                    </View>
                )
            }
        </>
    )
}

export default Logout

