import "react-native-gesture-handler";
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity, Alert } from 'react-native';
import Firebase, { db } from '../config/Firebase.js'
import { connect } from 'react-redux'
import axios from 'axios'

function Description({navigation, route, user}){
    const [email, setEmail] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [imagename, setImagename] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState("");

    const [product, setProduct] = useState("");
    const [loading, setLoading] = useState(true);

    const [description, setDescription] = useState("");    
    const fetchPosts = async () => {
        try {
          const list = [];
    
          // await db
          //   .collection('posts')
          //   .doc(route.params.productId)
          //   .get()
          // .then((querySnapshot) => {
              
          //   console.log(querySnapshot.data())
          // })
          axios.get(`https://xchangerujiya.herokuapp.com/item/${route.params.productId}`)
            .then((querySnapshot) => {
              
                // console.log(querySnapshot.data)
                const {
                    product,
                    name,
                    email,
                    phone,
                    imagename,
                    description,
                    time,
                    url,
                  } = querySnapshot.data[0];
                  setDescription(description)
                  setProduct(product)
                  setName(name)
                  setImageUrl(url)
                  setEmail(email)
                setTime(time)
                setPhone(phone)

                  if (loading) {
                    setLoading(false);
                  }
            
            })
            .catch(err => console.log(err))

    
        } catch (e) {
          console.log(e);
        }
      };
    
      useEffect(() => {
        fetchPosts();
      }, []);

       booking = () => {
        const new_booking = {
            productID:route.params.productId,
            buyer:user.email,
            seller: email,
            notified: "f",
            time: Date.now(),
            buyername: user.name,
            product,
          }
        // db.collection('bookings')
        // .doc(route.params.productId)
        // .set(new_booking)
        axios({
          method: 'post',
          url: "https://xchangerujiya.herokuapp.com/book",
          headers: {}, 
          data: new_booking
        })
        .then(() => {
            // console.log("success")
            navigation.navigate('Home')
            Alert.alert('You have successfully placed a booking for this item!')
        })
      }
    

    return(
        <View>
            {loading ? (<Text style={styles.cardText}>No Posts Yet!!</Text>): (<><View  style={styles.cardImageContainer}>
                  <Image
                  style={styles.cardImage}
                  source={{uri:imageUrl}}
                />
            </View>
            
            <View style={styles.flexboyparent}>      
                <View style={styles.onlypadding}>
                    <Text style={styles.Descriptionbold}>Description:</Text>
                    <Text style={styles.Descriptionnotbold}>{description}</Text>    
                </View> 

                <View style={styles.flexboy}>
                    <Text style={styles.Descriptionbold}>Owner:</Text>
                    <Text style={styles.Descriptionnotbold}>{name}</Text>
                    
                </View> 
                <View style={styles.flexboy}>
                    <Text style={styles.Descriptionbold}>Contact:</Text>
                    <Text style={styles.Descriptionnotbold}>{phone}</Text>
                    
                </View> 
                <View style={styles.flexboy}>
                    <Text style={styles.Descriptionbold}>Email:</Text>
                    <Text style={styles.Descriptionnotbold}>{email}</Text>
                    
                </View> 
                { email != user.email && <TouchableOpacity onPress={() => booking()}>
                    <View style={styles.centerthebutton}>
                            <View  style={styles.appButtonContainer}>
                                <Text style={styles.appButtonText}>Book Now</Text>
                            </View>
                    </View>    
                </TouchableOpacity>}
                
            </View></>    )}
            
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

  const mapStateToProps = state => {
    return {
        user: state.user
    }
  }
  
  export default connect(
    mapStateToProps,
  )(Description)