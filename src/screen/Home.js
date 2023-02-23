import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Dimensions, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../Constants/Header";
import Carousel from 'react-native-reanimated-carousel';
import { Card, Text } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {

    const Navigation = useNavigation()

    const DrawerContent = () => {
        Navigation.openDrawer()
    }

    const width = Dimensions.get('window').width;

    const data = [

        {
            key: '1',
            image: require('../Constants/Images/pet1.png')
        },
        {
            key: '1',
            image: require('../Constants/Images/pet2.png')
        },
        {
            key: '1',
            image: require('../Constants/Images/pet3.png')
        },
        {
            key: '1',
            image: require('../Constants/Images/pet4.png')
        },
        {
            key: '1',
            image: require('../Constants/Images/pet5.png')
        },
        {
            key: '1',
            image: require('../Constants/Images/pet6.png')
        },
        {
            key: '1',
            image: require('../Constants/Images/pet7.png')
        },
        {
            key: '1',
            image: require('../Constants/Images/pet8.png')
        },
        {
            key: '1',
            image: require('../Constants/Images/pet9.png')
        },
        {
            key: '1',
            image: require('../Constants/Images/pet10.png')
        },
        {
            key: '1',
            image: require('../Constants/Images/pet11.png')
        },

    ]

    const readData = async () => {

        const value = await AsyncStorage.getItem('userIdName');
        const v1 = await JSON.parse(value)
        // console.warn(v1)
    }


    useEffect( () => {
            readData()
    })

    return (
        <SafeAreaView style={{ height: '100%', width: '100%', backgroundColor: 'black' }}>

            <Header onPressDrawer={DrawerContent} />

            <View style={{ paddingHorizontal: 14, paddingTop: 6 }}>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 22, color: '#fff' }}>Vaishali</Text>
                            <Icon
                                name="keyboard-arrow-down"
                                color="white"
                                size={28}
                                style={{ alignSelf: 'center' }}
                            />
                        </View>
                        <Text style={{ fontSize: 18, color: '#fff', opacity: 0.6 }}>
                            Daily Weather
                        </Text>
                    </View>
                    <View style={{}}>
                        <Image
                            source={require('../Constants/Images/petGif.gif')}
                            style={styles.City}
                        />
                    </View>
                </View>

            </View>

            <View style={styles.weth}>
                <View>
                    <Text style={{ color: '#252525' }}>Wind</Text>
                    <Text
                        style={{
                            color: '#000000',
                            marginTop: 5,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                        33 m/hr
                    </Text>
                </View>
                <View>
                    <Text style={{ color: '#252525' }}>Humidity</Text>
                    <Text
                        style={{
                            color: '#000000',
                            marginTop: 5,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                        24 Km
                    </Text>
                </View>
                <View>
                    <Text style={{ color: '#252525' }}>Visibility</Text>
                    <Text
                        style={{
                            color: '#000000',
                            marginTop: 5,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                        64%
                    </Text>
                </View>
            </View>

            <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-evenly', }}>

                <TouchableOpacity
                    style={{ width: '40%', borderColor: 'white', borderWidth: 10, borderRadius: 10, backgroundColor: 'white' }}
                    onPress={() => Navigation.navigate("CarouselImg")}
                >

                    <Card style={{}}>
                        <Card.Title title="Pets Gallery" titleStyle={{ paddingLeft: 13, }} style={{}} />
                        <Card.Cover resizeMode='contain' source={require('../Constants/Images/pet1.png')} />
                        {/* <Card.Actions>
                        <Button>Cancel</Button>
                    </Card.Actions> */}
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity
                    style=
                    {{
                        width: '40%',
                        borderColor: 'white',
                        borderWidth: 10,
                        borderRadius: 10,
                        backgroundColor: 'white'
                    }}
                    onPress={() => Navigation.navigate("NewCarousel")}
                >
                    <Card >
                        <Card.Title title="Meow" titleStyle={{ paddingLeft: 32, }} />
                        <Card.Cover resizeMode='contain' source={require('../Constants/Images/pet10.png')} />
                    </Card>

                </TouchableOpacity>

            </View>

            <View style={{
                paddingTop: 20,
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Carousel
                    loop
                    vertical={false}
                    width={width}
                    height={width / 2}
                    autoPlay={true}
                    data={data}
                    mode="parallax"
                    modeConfig={{
                        parallaxScrollingScale: 1,
                        parallaxScrollingOffset: 10,
                        parallaxAdjacentItemScale: 2
                    }}
                    scrollAnimationDuration={2000}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                padding: 10,
                            }}
                        >
                            <Image source={item.image} style={{
                                width: '80%',
                                height: '100%',
                                backgroundColor: '#000',
                                justifyContent: 'center',
                                borderRadius: 15,
                                resizeMode: 'center',
                                borderColor: 'white',
                                borderWidth: 20
                            }} />

                        </View>
                    )}
                />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    City: {
        width: 45,
        height: 45,
        borderRadius: 50,
        overflow: 'hidden',
    },
    weth: {
        height: 80,
        width: 360,
        backgroundColor: '#F9F6F4',
        marginBottom: 20,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export default Home