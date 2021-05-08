import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity } from 'react-native';

export default function Description(){
    return(
        <View>
           <View  style={styles.cardImageContainer}>
                  <Image
                  style={styles.cardImage}
                  source={{ uri: "https://reactjs.org/logo-og.png" }}
                />
            </View>
            <View style={styles.flexboyparent}>      
                <View style={styles.onlypadding}>
                    <Text style={styles.Descriptionbold}>Description:</Text>
                    <Text style={styles.Descriptionnotbold}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>    
                </View> 

                <View style={styles.flexboy}>
                    <Text style={styles.Descriptionbold}>Owner:</Text>
                    <Text style={styles.Descriptionnotbold}>Goldfish Rodrigues</Text>
                    
                </View> 
                <View style={styles.flexboy}>
                    <Text style={styles.Descriptionbold}>Contact:</Text>
                    <Text style={styles.Descriptionnotbold}>4949564864</Text>
                    
                </View> 
                <View style={styles.flexboy}>
                    <Text style={styles.Descriptionbold}>Email:</Text>
                    <Text style={styles.Descriptionnotbold}>ruvin27@gmail.com</Text>
                    
                </View> 

                <TouchableOpacity >
                    <View style={styles.centerthebutton}>
                            <View  style={styles.appButtonContainer}>
                                <Text style={styles.appButtonText}>Book Now</Text>
                            </View>
                    </View>    
                </TouchableOpacity>
            </View>     
        </View>
    )
}

const styles = StyleSheet.create({
    cardImageContainer:{
    height:300,
    width:Dimensions.get('window').width * 1,
    },
    cardImage:{

      ...StyleSheet.absoluteFillObject,
    },
    flexboyparent:{
        paddingLeft:20,
        paddingRight:20,
    },
    flexboy:{
        flexDirection:"row",
         paddingTop:35,
        width:Dimensions.get('window').width * 0.85,
        
    },
    Descriptionbold:{
        fontWeight:"bold",
        fontSize: 18,
    },
    Descriptionnotbold:{
        fontSize: 18,
    },
    onlypadding:{
        paddingTop:10,
    },

    appButtonContainer: {
        backgroundColor: "dodgerblue",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width:Dimensions.get('window').width * 0.85,
    },
    centerthebutton:{
        paddingTop:40,
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