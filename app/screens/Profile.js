import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
export default function Profile({navigation}){
    return(
        <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>John Doe</Text>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>ruvin27@gmail.com</Text>  
            </TouchableOpacity>              
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>9124548564</Text> 
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}  style={styles.TouchableOpacityStyle} >
                <View style={styles.MainContainer}>
                    <Image source={require('../asset/floating.png')} 
                    
                            style={styles.FloatingButtonStyle} />

                </View>
                  </TouchableOpacity>
          </View>
        
      </View>
    </View>
    )
  }
  const styles = StyleSheet.create({
    header:{
        backgroundColor: "dodgerblue",
        height:200,
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
      },
      name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
      },
      body:{
        marginTop:40,
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
      },
      name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
      },
      buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",
      },
      MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
     
      TouchableOpacityStyle:{
     
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 133,
        bottom: 30,
      }, 
      FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height:50,
      }
});  