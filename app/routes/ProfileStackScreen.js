import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet,View,TouchableOpacity,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile'

const ProfileStack=createStackNavigator();

export default function ProfileStackScreen({navigation}) {
    return(
         <ProfileStack.Navigator 
         screenOptions={{ headerStyle: { backgroundColor: 'dodgerblue',} }}>
          <ProfileStack.Screen name="Profile" component={Profile}
               options={{
                    headerLeft:()=>(
                         <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.openDrawer()} style={styles.TouchableOpacityStyle} >
                              <View style={styles.MainContainer}>
                                   <Image source={require('../asset/hamburger.png')} 
                                   
                                        style={styles.FloatingButtonStyle} />
                              </View>
                         </TouchableOpacity>
                    )
               }} 
          />
         </ProfileStack.Navigator>
    )
  }
const styles = StyleSheet.create({
     headerStyle:{ 
          backgroundColor:"dodgerblue",
     },
     FloatingButtonStyle:{
          width:30,
          height:25,
          left:15

     },

     
 });  