import "react-native-gesture-handler";
import React, {useEffect, useState} from 'react';
import { StyleSheet,View,ScrollView,Image,TouchableOpacity, Alert} from 'react-native';
import { connect } from 'react-redux'
import  { db } from '../config/Firebase.js'
import {  Text,Dimensions , FlatList} from 'react-native'
import axios from 'axios';
import * as firebase from 'firebase';

 function Upload({navigation, user}){
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchPosts = async () => {
    try {
      const list = [];

      await fetch(`https://xchangenodejsapi.herokuapp.com/uploads/${user.email}`,{
        method:"get"
        })
        .then(res=>res.json())
        .then((querySnapshot) => {
          // console.log('Total Posts: ', querySnapshot.size);

          querySnapshot.forEach((doc) => {
            const {
              product,
              name,
              email,
              phone,
              imagename,
              description,
              time,
              url,
              _id
            } = doc;
            list.push({
              product,
              name,
              email,
              phone,
              imagename,
              description,
              time,
              url,
              _id
            });
          });
          if(querySnapshot.size!=0){
          setPosts(list);
          if (loading) {
            setLoading(false);
          }
        }
        });
        
      
      
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      try{

        setPosts(null)
        setLoading(true)
      }
      catch(e){
        
      }
      // console.log('focus')
    });
    const subscribe = navigation.addListener('focus', () => {
      fetchPosts();
      // console.log('blur')
    });

  }, [navigation]);

  useEffect(() => {
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   console.log(posts)
  // }, [posts]);

  const DeleteProduct = async (url,_id) => {
    if (url != "") {
      const storageRef = firebase.storage().refFromURL(url);
      const imageRef = firebase.storage().ref(storageRef.fullPath);

      imageRef
        .delete()
        .then(() => {
          console.log(`Image has been deleted successfully.`);
          deleteFirestoreData(_id);
        })
        .catch((e) => {
          console.log('Error while deleting the image. ', e);
        });
      // If the post image is not available
    } else {
      deleteFirestoreData(_id);
    }
  };

  const deleteFirestoreData = (_id) => {
    axios.delete(`https://xchangenodejsapi.herokuapp.com/delete/${_id}`)
      .then(() => {

        navigation.navigate('Home')
        Alert.alert(
          'Post deleted!',
          'Your post has been deleted successfully!',
        );
      })
      .catch((e) => console.log('Error deleting posst.', e));
  };
    return(
        <View>
            <View style={styles.cardcontainer}>
                <ScrollView contentContainerStyle={{ flexGrow: 1,alignItems:"center"}}>
                    {loading? (<Text style={styles.cardText}>No Posts Yet!!</Text>) : (<FlatList
            data={posts}
            renderItem={({item}) => (
              <View style={styles.card}>
            <View  style={styles.cardImageContainer}>
                <Image
                style={styles.cardImage}
                source={{ uri : item.url }}
                />
            </View>

            <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>{item.product}</Text>
            </View>

            <TouchableOpacity onPress={() => DeleteProduct(item.url,item._id)}>
                    <View style={styles.centerthebutton}>
                            <View  style={styles.appButtonContainer}>
                                <Text style={styles.appButtonText}>Delete</Text>
                            </View>
                    </View>    
            </TouchableOpacity>
        </View>
            )}
            keyExtractor={(item, index) => 'item'+index}
          />)}

                </ScrollView>
                <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate('UploadNewItem')} style={styles.TouchableOpacityStyle} >
                <View style={styles.MainContainer}>
                    <Image source={require('../assets/floating.png')} 
                    
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
          right: 40,
          top:645,
        },
       
        FloatingButtonStyle: {
          resizeMode: 'contain',
          width: 80,
          height:80,
        },
    //card ka css
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


  

//     container: {
//       flex: 1,
//       backgroundColor: 'red',
  
//     },
//     tempStyle:{
//       height:60,
//       backgroundColor:"yellow"
//     },
//     cardContainer:{
      
//       flex:9,
//       margin:10,
//       backgroundColor:"blue",
//       justifyContent:"center",
     
  
//     },
//  //floating action button css below
//         MainContainer: {
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//         },
       
//         TouchableOpacityStyle:{
       
//           position: 'absolute',
//           width: 50,
//           height: 50,
//           alignItems: 'center',
//           justifyContent: 'center',
//           right: 30,
//           bottom: 30,
//         },
//         card:{
//           backgroundColor:"white",
//           width:Dimensions.get('window').width * 0.85,
//           borderRadius:20,
//           margin:20,
//           elevation:8
//       },
  
//       cardImageContainer:{
//       height:210,
//       width:Dimensions.get('window').width * 0.85,
//       borderRadius:20,
//       },
//       cardTextContainer:{
//           height:50,
//           flex:1,
//       },
//       cardImage:{
//           borderTopRightRadius:20,
//           borderTopLeftRadius:20,
//         ...StyleSheet.absoluteFillObject,
//       },
  
    
//       cardText:{
//         color:"black",
//         fontSize:16,
//         margin:5,
//       },
//       appButtonContainer: {
//         backgroundColor: "dodgerblue",
//         borderBottomLeftRadius: 20,
//         borderBottomRightRadius: 20,
//         paddingVertical: 10,
//         paddingHorizontal: 12,
//         width:Dimensions.get('window').width * 0.85,
//     },
//     centerthebutton:{
//         justifyContent:"center",
//         alignItems:"center",
//     },
//     appButtonText: {
//         fontSize: 18,
//         color: "#fff",
//         fontWeight: "bold",
//         alignSelf: "center",
//         textTransform: "uppercase"
//     },

//     FloatingButtonStyle: {
//       resizeMode: 'contain',
//       width: 80,
//       height:80,
//     },
//     cardImage:{
//       borderTopRightRadius:20,
//       borderTopLeftRadius:20,
//     ...StyleSheet.absoluteFillObject,
//   },

  
  });
  const mapStateToProps = state => {
    return {
        user: state.user
    }
  }
  
  export default connect(
    mapStateToProps,
  )(Upload)




  