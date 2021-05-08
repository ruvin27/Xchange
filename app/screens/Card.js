
import React from 'react';
import {  View, Text, Image, StyleSheet ,Dimensions,TouchableOpacity } from 'react-native'
export default function Card({navigation}) {
  return (

    <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate('Description')} style={styles.TouchableOpacityStyle} >
          <View style={styles.card}>
            <View  style={styles.cardImageContainer}>
                  <Image
                  style={styles.cardImage}
                  source={{ uri: "https://reactjs.org/logo-og.png" }}
                />
            </View>
            <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Ajay Sharma Verbal ability and comprehension</Text>
          </View>
        </View>
    </TouchableOpacity>

        
       



  );
}

const styles = StyleSheet.create({

    card:{
        elevation:8,
        backgroundColor:"white",
    
        width:Dimensions.get('window').width * 0.85,
        borderRadius:20,
        margin:10
    },

    cardImageContainer:{
    height:210,
    width:Dimensions.get('window').width * 0.85,
    borderRadius:20,
    },
    cardTextContainer:{
        height:60,
        flex:1,

    },
    cardImage:{
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
      ...StyleSheet.absoluteFillObject,
    },

    cardText:{
      color:"black",
      fontSize:16,
      margin:5,
    }
  });
  