import React from "react";
import { FlatList, Image, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../Constants/Header";


const CarouselImg = () => {

    const data = [
        {
            key: '1',
            cityImage: require('../Constants/Images/pet1.png'),
            cityName: 'Kolkata',
        },
        {
            key: '2',
            cityImage: require('../Constants/Images/pet2.png'),
            cityName: 'Nagpur',
        },
        {
            key: '3',
            cityImage: require('../Constants/Images/pet3.png'),
            cityName: 'Pune',
        },
        {
            key: '4',
            cityImage: require('../Constants/Images/pet4.png'),
            cityName: 'Delhi',
        },
        {
            key: '5',
            cityImage: require('../Constants/Images/pet5.png'),
            cityName: 'Mumbai',
        },
        {
            key: '5',
            cityImage: require('../Constants/Images/pet6.png'),
            cityName: 'Mumbai',
        },
        {
            key: '5',
            cityImage: require('../Constants/Images/pet7.png'),
            cityName: 'Mumbai',
        },
        {
            key: '5',
            cityImage: require('../Constants/Images/pet8.png'),
            cityName: 'Mumbai',
        },
        {
            key: '5',
            cityImage: require('../Constants/Images/pet9.png'),
            cityName: 'Mumbai',
        },
        {
            key: '5',
            cityImage: require('../Constants/Images/pet10.png'),
            cityName: 'Mumbai',
        },
        {
            key: '5',
            cityImage: require('../Constants/Images/pet11.png'),
            cityName: 'Mumbai',
        },
    ];

    const Navigation = useNavigation()

    const DrawerContent = () => {
        Navigation.openDrawer()
    }

    return (

        <View style={{ height: '100%', width: '100%' }}>
            <Header onPressDrawer={DrawerContent} />

            <View style={{ flex: 2, }}>

                <View style={{ backgroundColor: 'black', flex: 1, flexDirection: 'row' }}>

                    <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>

                        <FlatList

                            data={data}
                            key={"1"}
                            numColumns={1}
                            renderItem={({ item }) => (
                                <View style={{
                                    height: 200,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    margin: 5,
                                    backgroundColor: 'white',
                                }}>

                                    <Image
                                        source={item.cityImage}
                                        style={{
                                            width: 150,
                                            height: 180,
                                            justifyContent: 'center',
                                            borderRadius: 10,
                                            backgroundColor: '#000',
                                        }}
                                        keyExtractor={(item) => item.id}
                                    />

                                    <Text style={{ color: 'black', fontSize: 15 }} >{item.cityName}</Text>

                                </View>
                            )}
                        />

                    </View>

                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>

                        <View style={{ flex: 1 }}>
                            <FlatList
                                horizontal
                                data={data}
                                key={"1"}
                                numColumns={1}
                                renderItem={({ item }) => (
                                    <View style={{
                                        height: 200,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 10, margin: 5,
                                        backgroundColor: '#0c0c0c',
                                    }}>

                                        <Image
                                            source={item.cityImage}
                                            style={{
                                                width: 100,
                                                height: 180,
                                                justifyContent: 'center',
                                                borderRadius: 10,
                                                backgroundColor: '#000',
                                            }}
                                            keyExtractor={(item) => item.id}
                                        />

                                        <Text style={{ color: 'white', fontSize: 15 }} >{item.cityName}</Text>

                                    </View>
                                )}
                            />
                        </View>

                        <View style={{ flex: 2 }}>
                            <FlatList
                                autoPlay={true}
                                data={data}
                                key={"1"}
                                numColumns={1}
                                renderItem={({ item }) => (
                                    <View style={{
                                        height: 200,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 10, margin: 5,
                                        backgroundColor: '#0c0c0c',
                                    }}>

                                        <Image
                                            source={item.cityImage}
                                            style={{
                                                width: 130,
                                                height: 180,
                                                justifyContent: 'center',
                                                borderRadius: 10,
                                                backgroundColor: '#000',
                                            }}
                                            keyExtractor={(item) => item.id}
                                        />

                                        <Text style={{ color: 'white' }} >{item.cityName}</Text>

                                    </View>
                                )}
                            />
                        </View>

                    </View>

                </View>

            </View>

        </View >

    )
}

export default CarouselImg