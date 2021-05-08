import React from 'react';
import {  View, Text, Image,StyleSheet ,Dimensions,TouchableOpacity } from 'react-native'

export default function Card() {
  return (
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

            <TouchableOpacity >
                    <View style={styles.centerthebutton}>
                            <View  style={styles.appButtonContainer}>
                                <Text style={styles.appButtonText}>Delete</Text>
                            </View>
                    </View>    
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({

    card:{
        backgroundColor:"white",
        width:Dimensions.get('window').width * 0.85,
        borderRadius:20,
        margin:20,
        elevation:8
    },

    cardImageContainer:{
    height:210,
    width:Dimensions.get('window').width * 0.85,
    borderRadius:20,
    },
    cardTextContainer:{
        height:50,
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
    },
    appButtonContainer: {
      backgroundColor: "dodgerblue",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width:Dimensions.get('window').width * 0.85,
  },
  centerthebutton:{
      justifyContent:"center",
      alignItems:"center",
  },
  appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
  }
});
  