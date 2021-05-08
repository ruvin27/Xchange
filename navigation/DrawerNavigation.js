import * as React from 'react'
import "react-native-gesture-handler";
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStackScreen from "./HomeStackScreen";
import ProfileStackScreen from "./ProfileStackScreen";
import UploadStackScreen from "./UploadStackScreen";
import LogOutButton from "./LogOutButton";


const Drawer = createDrawerNavigator();

 const DrawerScreens = () => (
    <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="Profile" component={ProfileStackScreen}/>
          <Drawer.Screen name="Upload" component={UploadStackScreen}/>
          <Drawer.Screen name="Logout" component={LogOutButton}/>
    </Drawer.Navigator> 
)
export default DrawerScreens
