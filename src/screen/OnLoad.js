import React, { useEffect, useRef } from "react";
import { Alert, Animated, Easing, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
    INPUT_RANGE_START,
    INPUT_RANGE_END,
    OUTPUT_RANGE_START,
    OUTPUT_RANGE_END,
    ANIMATION_TO_VALUE,
    ANIMATION_DURATION
} from "../Constants/AnimatedBg/AnimatedBg"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
// import Animated, { Easing } from "react-native-reanimated";

export default function BackgroundAnimation() {
    const initialValue = 0;
    const translateValue = useRef(new Animated.Value(initialValue)).current
    const translation = useRef(new Animated.Value(0)).current;
    const Navigation = useNavigation()

    useEffect(() => {
        const translate = () => {
            translateValue.setValue(initialValue);
            Animated.timing(translateValue, {
                toValue: 20,
                duration: 6000,
                easing: Easing.linear,
                useNativeDriver: true,
            }).start(() => translate());
        };

        translate()
    }, [translateValue])

    useEffect(() => {
        const translate2 = () => {
            translation.setValue(0);
            Animated.timing(translation, {
                toValue: -55,
                duration: 10000,
                easing: Easing.linear,
                useNativeDriver: true,
            }).start(() => translate2());
        }
        translate2()
    }, []);

    const translateAnimation = translateValue.interpolate({
        inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
        outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
    })

    const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

    return (

        <View style={{ backgroundColor: 'black', height: '100%', width: '100%', }}>

            <ImageBackground source={require('../Constants/Images/water.png')}>

                <View style={{
                    position: 'absolute', zIndex: 1, justifyContent: 'flex-end',
                    alignItems: 'center', width: "100%", height: "35%",
                }}>
                    <Text style={{ fontSize: 30, color: 'Black' }}>
                        Rush the World
                    </Text>
                    <Text style={{ fontSize: 16, color: 'Black' }}>
                        Travel In Your Own Way
                    </Text>
                </View>

                <View>

                    <AnimatedImage
                        style={[style.background, {
                            transform: [
                                // {
                                //     translateX: translateAnimation,
                                // },
                                {
                                    translateY: translateAnimation,
                                }
                            ]
                        }]}
                        source={require("../Constants/Images/water.png")}

                    />

                </View>

                <View style={{
                    height: '100%', width: '100%', zIndex: 1, position: 'absolute', alignItems: 'center', justifyContent: 'flex-end'
                    , paddingBottom: 140
                }}>

                    <AnimatedImage
                        resizeMode="contain"
                        style={[style.car, {
                            transform: [
                                { translateY: translation },

                                { translateX: translation }
                            ],
                            // opacity: translation.interpolate({
                            //     inputRange: [0, 100],
                            //     // outputRange: [100, 0],
                            //     outputRange: [0, 1],
                            // }),
                            height: 150, width: 150,

                        }]}
                        source={require("../Constants/Images/yatch.png")}
                    />

                </View>

                <View style={{
                    position: 'absolute', zIndex: 1,
                    alignItems: 'center', width: "100%", bottom: 35
                }}>
                    <Pressable style={{
                        borderRadius: 20, width: '80%', backgroundColor: '#00308F', justifyContent: 'space-evenly',
                        padding: 8, flexDirection: 'row', zIndex: 1
                    }}
                        onPress={() => {
                            Navigation.navigate('Login')
                            // console.warn("Hi");
                            // Alert.alert("hi")
                        }
                        }
                    >
                        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>
                            Click Here To LOGIN
                        </Text>

                        <FontAwesomeIcon name="arrow-right" size={20} color={'white'} />
                    </Pressable>
                </View>

            </ImageBackground >

        </View >

    )
}

const style = StyleSheet.create({
    background: {
        position: 'relative',
        width: "100%",
        height: "100%",
    },
    car: {
    }
})