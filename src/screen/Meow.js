import React, { useState, useRef, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
    Animated,
    FlatList,
    ImageBackground,
    VirtualizedList,
} from 'react-native';
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Header from "../Constants/Header";

const NewCarousel = () => {

    const ImgApi = "https://dog.ceo/api/breed/hound/afghan/images"
    // const ImgApi = "https://dog.ceo/api/breeds/image/random/10"

    const isFocused = useIsFocused()
    const [img, setImg] = useState('')

    const ApiResponse = async (url) => {
        try {
            const resApi = await fetch(ImgApi, {
                method: 'GET',
                headers: {
                    'Content_Type': 'application/json'
                }
            }).then(response => {
                return response.json();
            }).catch(err => {
                return err
            })
            return resApi;
        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        const getData = async () => {
            const imagesApi = await ApiResponse(ImgApi)
            if (imagesApi?.status == 'success') {
                console.warn("APi Response is OK", imagesApi?.message);
                setImg(imagesApi?.message)
            }
        }
        getData()
    }, [isFocused])

    const Cities = [
        {
            key: '1',
            cityImage: require('../Constants/Images/pet1.png'),
            cityName: '1',
        },
        {
            key: '2',
            cityImage: require('../Constants/Images/pet2.png'),
            cityName: '2',
        },
        {
            key: '3',
            cityImage: require('../Constants/Images/pet3.png'),
            cityName: '3',
        },
        {
            key: '4',
            cityImage: require('../Constants/Images/pet4.png'),
            cityName: '4',
        },
        {
            key: '5',
            cityImage: require('../Constants/Images/pet5.png'),
            cityName: '5',
        },
    ];

    const Weather = [
        {
            image: require('../Constants/Images/pet1.png'),
            weather: "Heavy Rain",
            weath_Im: require('../Constants/Images/pet6.png'),
            Time: "Morning",
            Temp: "29 °",
            Qu: "Feels Like 30 °",
            Day: "Today 14-02-2021"
        },
        {
            image: require('../Constants/Images/pet2.png'),
            weather: "Cloudy",
            weath_Im: require('../Constants/Images/pet7.png'),
            Time: "Morning",
            Temp: "25 °",
            Qu: "Feels Like 15 °",
            Day: "Yesterday 13-02-2021"
        },
        {
            image: require('../Constants/Images/pet3.png'),
            weather: "Heavy Rain",
            weath_Im: require('../Constants/Images/pet8.png'),
            Time: "Morning",
            Temp: "27 °",
            Qu: "Feels Like 30 °",
            Day: "Ereyesterday 12-02-2021"
        },
        {
            image: require('../Constants/Images/pet4.png'),
            weather: "Sunny",
            weath_Im: require('../Constants/Images/pet9.png'),
            Time: "Morning",
            Temp: "45 °",
            Qu: "Feels Like 50 °",
            Day: "Today 15-02-2021"
        },
    ];

    const { width, height } = Dimensions.get('window');

    const RenderItem = ({ item }) => {
        return (
            <TouchableWithoutFeedback>
                <View>
                    <ImageBackground
                        source={item.image}
                        style={{
                            width: 360,
                            height: 240,
                            borderRadius: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}
                        borderRadius={10}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ color: '#ffffff', fontWeight: '600', fontSize: 20 }}>
                                {item.Day}
                            </Text>
                            <Image
                                style={{ height: 100, width: 100 }}
                                source={item.weath_Im}
                            />
                            <View>
                                <Text
                                    style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 25 }}>
                                    {item.weather}
                                </Text>
                                <Text
                                    style={{ color: '#ffffff', fontWeight: '600', fontSize: 20 }}>
                                    {item.Time}
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text
                                style={{
                                    color: '#ffffff',
                                    fontWeight: 'bold',
                                    fontSize: 65,
                                    textAlign: 'center',
                                }}>
                                {item.Temp}
                            </Text>
                            <Text style={{ color: '#ffffff', fontWeight: '600', fontSize: 20 }}>
                                {item.Qu}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    const [dragRange, setDragRange] = useState({
        top: height - 80,
        bottom: 160,
    });

    const _draggedValue = new Animated.Value(180);

    const ModalRef = useRef(null);

    const Navigation = useNavigation()

    const DrawerContent = () => {
        Navigation.openDrawer()
    }

    return (
        <View style={styles.container}>
            <Header onPressDrawer={DrawerContent} />

            <View style={{
                paddingHorizontal: 14,
            }}>
                {/* <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 26, color: '#fff' }}>Delhi</Text>
                            <Icon
                                name="keyboard-arrow-down"
                                color="white"
                                size={28}
                                style={{ alignSelf: 'center' }}
                            />
                        </View>
                        <Text style={{ fontSize: 26, color: '#fff', opacity: 0.6 }}>
                            Daily Weather
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../Constants/Images/petGif.gif')}
                            style={styles.City}
                        />
                        <View style={styles.CityNotification}></View>
                    </View>
                </View> */}

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

                <View>
                    <Text style={{ color: '#fff', opacity: 0.6, marginBottom: 10, paddingLeft: 10 }}>
                        Pet
                    </Text>

                    <View style={{ flexDirection: 'row', padding: 2, paddingVertical: 10 }}>
                        {/* <TouchableOpacity style={styles.AddCity}>
                            <View style={styles.AddCityIconbg}>
                                <Icon
                                    name="add"
                                    color="white"
                                    size={28}
                                    style={{ alignSelf: 'center' }}
                                />
                            </View>
                            <Text style={{ color: '#fff' }}>Add City</Text>
                        </TouchableOpacity> */}
                        <FlatList
                            // inverted
                            horizontal
                            // data={Cities}
                            data={img}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.AddCity}>
                                        <Image
                                            style={styles.AddCityIconbg}
                                            // source={item.cityImage}
                                            source={{ uri: item}}
                                        />
                                        {/* <Text style={{ color: '#fff' }}>{item?.message}</Text> */}
                                    </View>
                                );
                            }}
                        />

                    </View>

                    <Text style={{ color: '#fff', opacity: 0.6, marginBottom: 10, paddingLeft: 10 }}>
                        Pet
                    </Text>

                    <View style={{ flexDirection: 'row' }}>
                        <FlatList
                            inverted
                            horizontal
                            loop
                            data={Cities}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.AddCity}>
                                        <Image
                                            style={styles.AddCityIconbg}
                                            source={item.cityImage}
                                        />
                                        <Text style={{ color: '#fff' }}>{item.cityName}</Text>
                                    </View>
                                );
                            }}
                        />

                    </View>

                    {/* <Image source={{ uri: img?.message[11] }} style={{ width: 150, height: 150, }} /> */}
                    {/* <Text style={{ fontSize: 20, color: 'white', }}>{img?.message?.australian}</Text> */}

                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingVertical: 1
    },
    City: {
        width: 55,
        height: 55,
        borderRadius: 40,
    },
    CityNotification: {
        height: 12,
        width: 12,
        backgroundColor: '#4853ef',
        borderRadius: 6,
        position: 'absolute',
        right: 6,
        borderWidth: 2,
        borderColor: '#000',
    },
    AddCity: {
        height: 140,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0c0c0c',
        borderRadius: 10,
        marginRight: 14,
    },
    AddCityIconbg: {
        width: 70,
        height: 70,
        backgroundColor: '#000',
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
    },
    weth: {
        height: 100,
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

export default NewCarousel;