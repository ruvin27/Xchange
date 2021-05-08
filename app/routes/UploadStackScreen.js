import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet,View,TouchableOpacity,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import UploadNewItem from "../screens/UploadNewItem";
import Upload from '../screens/Upload'

const UploadStack=createStackNavigator();

export default function UploadStackScreen({navigation}) {
    return(
         <UploadStack.Navigator
         screenOptions={{ headerStyle: { backgroundColor: 'dodgerblue',} }}>
          <UploadStack.Screen name="Upload" component={Upload}
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
          <UploadStack.Screen name="UploadNewItem" component={UploadNewItem}/>
         </UploadStack.Navigator>
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