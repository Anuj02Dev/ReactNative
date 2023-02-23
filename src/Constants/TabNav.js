import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SideDrawerNav from "../router/SideDrwaerNav";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator()

function MyTabBar() {

    const Navigation = useNavigation()

    return (
        <View style={{
            height: 45, width: '100%',
            shadowColor: 'white',
            elevation: 60,
            backgroundColor: 'black'
        }}>

            <View style={{
                flexDirection: 'row',
                borderRadius: 10, width: '100%',
                height: '100%', backgroundColor: 'black'
            }}>

                <TouchableOpacity
                    accessibilityRole="button"
                    style={{ flex: 1, backgroundColor: 'black', margin: 5, shadowColor: 'white', elevation: 20, borderRadius: 5 }}
                    onPress={() => Navigation.navigate('Home')}
                >
                    <Text style={{ color: 'white', textAlign: 'center', paddingTop: 9 }}>
                        Home Page
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: 'black', margin: 5, shadowColor: 'white', elevation: 20, borderRadius: 5 }}
                    onPress={() => Navigation.navigate('CarouselImg')}
                >
                    <Text style={{ color: 'white', textAlign: 'center', paddingTop: 9 }}>
                        Pets Gallery
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: 'black', margin: 5, shadowColor: 'white', elevation: 20, borderRadius: 5 }}
                    onPress={() => Navigation.navigate('NewCarousel')}
                >
                    <Text style={{ color: 'white', textAlign: 'center', paddingTop: 9 }}>
                        Meow
                    </Text>

                </TouchableOpacity>

            </View>

        </View>
    )
}


const TabNav = () => {
    return (
        <Tab.Navigator
            initialRouteName="Drawer"
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                },
            }}
            tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen name="Drawer" component={SideDrawerNav} />

        </Tab.Navigator>
    )
}

export default TabNav