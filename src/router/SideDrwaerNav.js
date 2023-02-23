import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../Constants/CustomDrawer";
import Home from "../screen/Home";
import Logout from "../screen/Logout";
import NewCarousel from "../screen/Meow";
import CarouselImg from "../screen/Petss";

const Drawer = createDrawerNavigator()

const SideDrawerNav = () => {

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: 'white',
                },
            }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="CarouselImg" component={CarouselImg} />
            <Drawer.Screen name="NewCarousel" component={NewCarousel} />
            {/* <Drawer.Screen name="ModalImg" component={ModalImg} /> */}
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    )
}

export default SideDrawerNav