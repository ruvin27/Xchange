import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateuid } from '../actions/user'
import Firebase from '../config/Firebase'
import button from '../screens/logout'
const LogOut=createStackNavigator();



export default function LogOutButton() {
   return(
        <LogOut.Navigator 
        screenOptions={{ headerStyle: { backgroundColor: 'dodgerblue',} }}>
         <LogOut.Screen name="Logout" component={button}/>
        </LogOut.Navigator>
   )
 }

  


