import React, { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Carousel from 'react-native-reanimated-carousel';
import { Dimensions, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const ModalImg = () => {

    const Navigation = useNavigation()
    const width = Dimensions.get('window').width;

    // const ImgApi = "https://dog.ceo/api/breeds/image/random/2"
    const ImgApi = "https://dog.ceo/api/breed/hound/afghan/images"

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
            if (imagesApi?.status == "success") {
                // console.warn("response OK ", imagesApi?.message);
                setImg(imagesApi?.message)
            }
        }
        getData()
    }, [isFocused])

    console.warn("....========>>>>", img);

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

    return (


        <View
            style={{
                flex: 1,
                backgroundColor: 'black',
                justifyContent: "center",
                alignItems: 'center',
            }}
        >

            <View style={{ alignItems: 'center', justifyContent: 'center', }}>

                <View style={{}}>
                    <TouchableOpacity style={{}} onPress={() => Navigation.navigate("Home")}>
                        <Icon style={{}} name="back" size={30} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 60 }}>

                    <Carousel
                        loop
                        vertical={false}
                        width={width}
                        height={width / 2}
                        autoPlay={true}
                        // data={data}
                        data={img?.message}
                        mode="parallax"
                        modeConfig={{
                            parallaxScrollingScale: 0.9,
                            parallaxScrollingOffset: 2,
                            parallaxAdjacentItemScale: 3

                        }}

                        scrollAnimationDuration={3000}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    // source={item.image}
                                    source={{ uri: item }}
                                    style={{
                                        resizeMode: 'center',
                                        height: 200,
                                        width: '80%',
                                        borderRadius: 10,
                                        padding: 50,
                                        borderWidth: 2,
                                        borderColor: 'white'
                                    }}
                                />

                            </View>
                        )}
                    />

                </View>

            </View>

        </View>

    )
}

export default ModalImg