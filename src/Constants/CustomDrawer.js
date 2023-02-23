import React, { useEffect, useState } from "react"
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Caption, Text, Title, } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/FontAwesome5";
import DrawerDataMap from "./Drawer";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function CustomDrawer({ props }) {

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
        <View style={{ flex: 1, backgroundColor: 'black', shadowColor: 'white', elevation: 20 }}>
            <DrawerContentScrollView {...props}
                showsVerticalScrollIndicator={false}
                style={{
                    borderTopRightRadius: 15, borderBottomRightRadius: 15,
                }}>

                <View>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image source={require('../Constants/Images/petGif.gif')}
                                size={70} />

                            <View style={{ paddingHorizontal: 30, flexDirection: 'column', paddingVertical: 12 }}>
                                <Title style={styles.title}>Hey !</Title>
                                <Caption style={styles.caption}>{name}</Caption>
                            </View>

                        </View>

                        {/* <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>Paragraph</Paragraph>
                                <Caption style={styles.caption}>Caption</Caption>
                            </View>

                        </View> */}

                    </View>

                    <View style={{}}>

                        <DrawerItem
                            icon={() => (
                                <MaterialIcons
                                    name="pets"
                                    color={'white'}
                                    size={30}
                                />
                            )}
                            label={() => (<Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Home</Text>)}
                            activeTintColor="white"
                            inactiveTintColor="white"
                            onPress={() => Navigation.navigate('Home')}
                        />
                    </View>

                    <View style={{}}>

                        <DrawerItem
                            icon={() => (
                                <MaterialCommunityIcons
                                    name="dog"
                                    color={'white'}
                                    size={30}
                                />
                            )}
                            label={() => (<Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Pets Gallery</Text>)}
                            activeTintColor="white"
                            inactiveTintColor="white"
                            onPress={() => Navigation.navigate('CarouselImg')}
                        />

                    </View>

                    <View style={{}}>

                        <DrawerItem
                            icon={() => (
                                <MaterialCommunityIcons
                                    name="cat"
                                    color={'white'}
                                    size={30}
                                />
                            )}
                            label={() => (<Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Meow</Text>)}
                            activeTintColor="white"
                            inactiveTintColor="white"
                            labelStyle={{}}
                            onPress={() => Navigation.navigate('NewCarousel')}
                        />

                    </View>



                    {/* <DrawerDataMap /> */}

                    {/* <Drawer.Section title="Drawer" >

                        <TouchableRipple >
                            <View style={styles.preference}>
                                <Text>Text</Text>
                                <View pointerEvents="none">
                                    <Switch />
                                </View>
                            </View>
                        </TouchableRipple>

                    </Drawer.Section> */}

                </View>

            </DrawerContentScrollView>

            <View style={{ borderTopWidth: 1, borderColor: 'white', }}>
                <DrawerItem
                    icon={() => (
                        <MaterialIcons
                            name="logout"
                            size={30}
                            color={'white'}
                        />
                    )}
                    label={() => (<Text style={{ color: 'white', fontSize: 18, textAlign: 'center', }}>SignOut</Text>)}
                    activeTintColor="white"
                    inactiveTintColor="white"
                    onPress={() => Navigation.navigate("Logout")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userInfoSection: {
        paddingLeft: 20,
        borderBottomWidth: 2,
        padding: 15
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: 'white',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
})

export default CustomDrawer