import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet,View,TouchableOpacity,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Description from '../screens/Description'

const HomeStack=createStackNavigator();

export default function HomeStackScreen({navigation}) {
    return(
         <HomeStack.Navigator 
         screenOptions={{ headerStyle: { backgroundColor: 'dodgerblue',} }}>
          <HomeStack.Screen name="Home" component={Home}
          
               options={{
                    headerLeft:()=>(
                         <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.openDrawer()} style={styles.TouchableOpacityStyle} >
                              <View style={styles.MainContainer}>
                                   <Image source={require('../asset/hamburger.png')} 
                                   
                                        style={styles.FloatingButtonStyle} />
                              </View>
                         </TouchableOpacity>
                    ),
               }} 
          />
          <HomeStack.Screen name="Description" component={Description} />
         </HomeStack.Navigator>
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








// homescreen===home  