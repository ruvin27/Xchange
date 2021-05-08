import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet,View,ScrollView,Image,TouchableOpacity} from 'react-native';
import CardUpload from './CardUpload'
export default function Upload({navigation}){
    return(
        <View>
            <View style={styles.cardcontainer}>
                <ScrollView contentContainerStyle={{ flexGrow: 1,alignItems:"center"}}>
                    <CardUpload/>
                    <CardUpload/>
                    <CardUpload/>
                    <CardUpload/>
                    <CardUpload/>
                </ScrollView>
                <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate('UploadNewItem')} style={styles.TouchableOpacityStyle} >
                <View style={styles.MainContainer}>
                    <Image source={require('../asset/floating.png')} 
                    
                            style={styles.FloatingButtonStyle} />

                </View>
                  </TouchableOpacity>
            </View>
        </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
  
    },
    tempStyle:{
      height:60,
      backgroundColor:"yellow"
    },
    cardContainer:{
      
      flex:9,
      margin:10,
      backgroundColor:"blue",
      justifyContent:"center",
     
  
    },
 //floating action button css below
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
          right: 30,
          bottom: 30,
        },
       
        FloatingButtonStyle: {
          resizeMode: 'contain',
          width: 80,
          height:80,
        }

  
  });
