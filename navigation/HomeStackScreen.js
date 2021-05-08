import "react-native-gesture-handler";
import React, {useEffect, useState} from 'react';
import { StyleSheet,View,TouchableOpacity,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Description from '../screens/Description'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateNot } from '../actions/user'
import Notifications from "../screens/notifications";
import Firebase, { db } from '../config/Firebase.js'
import axios from 'axios'
const HomeStack=createStackNavigator();



function HomeStackScreen({navigation, user, updateNot}) {
     const [messages, setMessages] = useState(false);
     const fetchPosts = async () => {
       
      
          //   await db
          //     .collection('bookings')
          //     .where("seller","==",user.email)
          //     .where("notified","==","f")
          //     .orderBy('time', 'desc')
          //     .get()
          axios.get(`https://xchangerujiya.herokuapp.com/notification/icon/${user.email}`)
              .then((querySnapshot) => {
               //  console.log('Total Posts: ', querySnapshot.size);
               if(querySnapshot.data.length!=0){
                    // setMessages(true)
                    updateNot(true)
               }
     
              });
              
            
            
         
        };
      
        useEffect(() => {
          fetchPosts();
        }, []);
    return(
         <HomeStack.Navigator 
         screenOptions={{ headerStyle: { backgroundColor: 'dodgerblue',} }}>
          <HomeStack.Screen name="Home" component={Home}
          
               options={{
                    headerLeft:()=>(
                         // this.handleSignout(updateuid)
                         //navigation.openDrawer()
                         <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.openDrawer()} style={styles.TouchableOpacityStyle} >
                              <View style={styles.MainContainer}>
                                   <Image source={require('../assets/hamburger.png')} 
                                   
                                        style={styles.FloatingButtonStyle} />
                              </View>
                         </TouchableOpacity>
                    ),
                    headerRight:()=>(
                         <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Notifications')}  >
                                                                 {user.messages ? (<View >
                                   <Image source={require('../assets/newnotification.png')} 
                                   
                                        style={styles.FloatingButtonStyleRight} />
                              </View>) : (<View >
                                   <Image source={require('../assets/notification.png')} 
                                   
                                        style={styles.FloatingButtonStyleRight} />
                              </View>)}

                              
                         </TouchableOpacity>
                    )
               }} 
          />
          <HomeStack.Screen name="Description" component={Description} />
          <HomeStack.Screen name="Notifications" component={Notifications} />

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
     FloatingButtonStyleRight:{
          width:30,
          height:30,
          right:20

     },

     
 });

 const mapDispatchToProps = dispatch => {
     return bindActionCreators({ updateNot }, dispatch)
   }
   
   const mapStateToProps = state => {
     return {
         user: state.user
     }
   }
   
   export default connect(
     mapStateToProps,
     mapDispatchToProps
   )(HomeStackScreen)






