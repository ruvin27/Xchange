import "react-native-gesture-handler";
import React, {useState, useEffect} from 'react';
import { StyleSheet,View,ScrollView, FlatList } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { connect } from 'react-redux'
import Firebase, { db } from '../config/Firebase.js'
import {  Text, Image ,Dimensions,TouchableOpacity, Alert } from 'react-native'


function Home({navigation, user}) {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showingposts, setShowingPosts] = useState(null);

  useEffect(() => {
    return () => {
      setLoading(true)
      setPosts(null)
      setShowingPosts(null)
      // console.log('will unmount');
    }
  }, []);
  const fetchPosts = async () => {
    try {
      const list = [];
      

      await fetch("https://xchangerujiya.herokuapp.com/post",{
                        method:"get"
                    })
                    .then(res=>res.json())
                    .then(data=>{
                      // console.log(data)
                        // Alert.alert(`New Post is saved successfuly`)

                            data.forEach((doc) => {
                              // console.log(doc)
                                  const {
                                    product,
                                    name,
                                    email,
                                    phone,
                                    imagename,
                                    description,
                                    time,
                                    url,
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
                                  });
                                });

                                    if(data.length != 0){
                                      setPosts(list);
                                      setShowingPosts(list)
                                      if (loading) {
                                        setLoading(false);
                                      }
                                    }
                    })
                    .catch(err=>{
                      // Alert.alert("someting went wrong")
                      console.log(err)
                  })


    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      try{

        setPosts(null)
        setShowingPosts(null)
        setLoading(true)
      }
      catch(e){
        
      }
      // console.log('blur')
    });
    const subscribe = navigation.addListener('focus', () => {
      fetchPosts();
      // console.log('focus')
    });

  }, [navigation]);
  // useEffect(() => {
  //   console.log(posts)
  // }, [posts]);

  const search = (value) => {
    const list = [];

    if(value== ""){
      setShowingPosts(posts)
    }
    else{
      if(posts != null){
        for (let Object of posts) {
          if(Object.product.includes(value)){
            list.push(Object)
          }
      }
      setShowingPosts(list)
      }
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.parentSearchContainer}>
          <View style={styles.searchContainer}>
                  <View >
                      <TextInput placeholder="Search"  style={styles.search}         onChangeText={(value) => search(value)}/>
                  </View>
          </View>
        </View>
        
        <View style={styles.cardContainer}>
          <ScrollView contentContainerStyle={{ flexGrow: 1,alignItems:"center"}}>
            {loading ?(<Text style={styles.cardText}>No Posts Yet!!</Text>) : (<FlatList
            data={showingposts}
            renderItem={({item}) => (
              <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate('Description', { productId: item.imagename })} style={styles.TouchableOpacityStyle} >
              <View style={styles.card}>
                <View  style={styles.cardImageContainer}>
                      <Image
                      style={styles.cardImage}
                      source={{ uri: item.url }}
                    />
                </View>
                <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>{item.product}</Text>
              </View>
            </View>
        </TouchableOpacity>
            )}
            keyExtractor={(item, index) => 'item'+index}
          />)}
            

          </ScrollView>

        </View>


    </View>
  );
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
const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default connect(
  mapStateToProps,
)(Home)