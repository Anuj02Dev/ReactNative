import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "../Constants/TabNav";

const Stack = createStackNavigator();

const StackNav = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="BottomTab" component={TabNav} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default StackNav