import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {  View, Text, Image, StyleSheet ,Dimensions,TouchableOpacity, ScrollView,FlatList } from 'react-native'
import Firebase, { db } from '../config/Firebase.js'
import { updateNot } from '../actions/user'
import { bindActionCreators } from 'redux'
import axios from 'axios'

const Notifications = ({user, updateNot}) => {
  const [messages, setMessages] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    updateNot(false)
    try {
      const list = [];

      // await db
      //   .collection('bookings')
      //   .where("seller","==",user.email)
      //   .where("notified","==","f")
      //   .orderBy('time', 'desc')
      //   .get()
      axios.get(`https://xchangerujiya.herokuapp.com/notification/${user.email}`)
        .then((querySnapshot) => {
          // console.log('Total Posts: ', querySnapshot.size);
          // console.log(querySnapshot.data)
          querySnapshot.data.forEach((doc) => {

            const {
             buyer,
             seller,
             productID,
             time,
             product,
             buyername
            } = doc;
            // db
            // .collection('bookings')
            // .doc(productID)
            // .delete()
            axios.patch(`https://xchangerujiya.herokuapp.com/notification/${user.email}`)
            list.push({
              buyer,
              seller,
              productID,
              time,
              product,
              buyername
            });
          });
          if(querySnapshot.size!=0){
          setMessages(list);
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
    fetchPosts();
  }, []);

    return(
        <View style={styles.container}>

        
        <View style={styles.cardContainer}>
          <ScrollView contentContainerStyle={{ flexGrow: 1,alignItems:"center"}}>
            {loading ?(<Text style={styles.cardText}>No New Notifications!!</Text>) : (<FlatList
            data={messages}
            renderItem={({item}) => (
              // <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate('Description', { productId: item.imagename })} style={styles.TouchableOpacityStyle} >
              <View style={styles.card}>
              
                <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>{item.buyername} ({item.buyer}) has set an order for {item.product}</Text>
              </View>
            </View>
        // </TouchableOpacity>
            )}
            keyExtractor={(item, index) => 'item'+index}
          />)}
            

          </ScrollView>

        </View>


    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
  
    },
    tempStyle:{
      height:60,
      backgroundColor:"white"
    },
    parentSearchContainer:{
      height:80
    },
    searchContainer:{
      flex:1,
      justifyContent:'center',
      backgroundColor:"#f4f4f4",
      padding:10,
    },
    search:{
      padding:10,
      backgroundColor:"#DCDCDC",
      color:"black",
      borderRadius:20,
  
  },
    cardContainer:{
      
      flex:9,
      margin:10,
      backgroundColor:"#F4F4F4",
      justifyContent:"center",
     
  
    },
    card:{
      elevation:8,
      backgroundColor:"white",
      width:Dimensions.get('window').width * 0.85,
      padding:10,
      borderRadius:5,
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
  )(Notifications)