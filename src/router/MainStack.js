import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screen/Login";
import StackNav from "./StackNav";
import OnLoad from '../screen/OnLoad'
import ModalImg from "../Constants/ModalImg";

const Stack = createStackNavigator();

const MainStack = () => {

    return (
        <NavigationContainer>

            <Stack.Navigator>
                {/* <Stack.Screen name="BackgroundAnimation" component={OnLoad} options={{ headerShown: false }} /> */}

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Root"
                    component={StackNav}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ModalImg"
                    component={ModalImg}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default MainStack;
