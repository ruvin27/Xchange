import "react-native-gesture-handler";
import React, {useState , useEffect} from 'react';
import { StyleSheet, Text, View,Dimensions,TextInput, Alert, Image} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux'
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import { db } from '../config/Firebase.js'



function UploadNewItem({user,navigation}){
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [imagename, setImagename] = useState(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        //console.log(imageUrl)
        if(imageUrl!=null){
            const post = {
                imagename,
                email: user.email,
                name: user.name,
                phone: user.phone,
                product: name,
                description,
                url: imageUrl,
                time:Date.now()
            }
            // db.collection('posts')
            //         .doc(imagename)
            //         .set(post)

                    fetch("https://xchangerujiya.herokuapp.com/post",{
                        method:"post",
                        headers:{
                          'Content-Type': 'application/json'
                        },
                        body:JSON.stringify({
                          
                            imagename,
                            email: user.email,
                            name: user.name,
                            phone: user.phone,
                            product: name,
                            description,
                            url: imageUrl,
                            time:Date.now()
                        })
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        Alert.alert(`New Post is saved successfuly`)
                    })
                    .catch(err=>{
                      Alert.alert("someting went wrong")
                  })

            setImage(null);
            setImageUrl(null);
            setImagename(null);
            setName("");
            setDescription("");
            navigation.goBack()

            navigation.navigate('Home')
        }
      }, [imageUrl]);

    onChooseImagePress = async (user,updateUri) => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        let uri = "abcd"
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        if (!pickerResult.cancelled) {
             uri = pickerResult.uri;
             //console.log(uri)
            setImage(uri)
            // uploadImage(pickerResult.uri, "test-image", user)
            // .then(() => {
            //     Alert.alert("Success");
            // })
            // .catch((error) => {
            //   Alert.alert(error);
            // });
        }
        }
        uploadImage = async (uri, imageName, user) => {
          const response = await fetch(uri);
          const blob = await response.blob();
            var url =null;
          var ref = firebase.storage().ref().child(user.email+"/"+imageName);
        //   const url = await ref.getDownloadURL();
          //console.log(url)
          ref.put(blob)
          .then(function(snapshot) {

            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            console.log('Upload is ' + progress + '% done');

        }).then(function() {
            // Upload completed successfully, now we can get the download URL
            ref.getDownloadURL().then(function(downloadURL) {
                //console.log('File available at', downloadURL);
                setImageUrl(downloadURL);
                url = downloadURL;
            });
        });
        return url
    }
    

    return(
        <View style={{flex: 1}}>
            <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle} onPress={() =>  this.onChooseImagePress(user)}>
            <View style={styles.parentdivcard}>
                            {image != null ? <Image source={{uri: image}} style={styles.previewImage}/> :                 
                <View style={styles.card}>
                    <Text style={styles.uploadtext}>Click To Add Product Image</Text>
                </View>}
                    </View>
            </TouchableOpacity>

            <View style={styles.searchContainer}>
                <View >
                    <TextInput 
                    placeholder="Product Name" 
                    style={styles.search}
                    value={name}
                    onChangeText={(value) => setName(value)}
                    />
                </View>
            </View>

            <View style={styles.searchContainer}>
                <View >
                    <TextInput 
                    placeholder="Description" 
                    style={styles.descriptionsearch} 
                    value={description}
                    onChangeText={(value) => setDescription(value)}
                    />
                </View>
            </View>

            <TouchableOpacity onPress={() => uploadImage(image, imagename, user)} >
                    <View style={styles.centerthebutton}>
                            <View  style={styles.appButtonContainer}>
                                <Text style={styles.appButtonText}>Upload</Text>
                            </View>
                    </View>    
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    card:{
        backgroundColor:"#DCDCDC",
        width:Dimensions.get('window').width * 0.85,
        borderRadius:20,
        margin:10,
        height:300,
        justifyContent:"center",
        alignItems:"center",

    },
    parentdivcard:{
        justifyContent:"center",
        alignItems:"center",
        
    },
    uploadtext:{
        alignItems:"center",
        justifyContent:"center",
    },
    searchContainer:{
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"#f4f4f4",
        padding:10,
      },
      search:{
        padding:10,
        backgroundColor:"#DCDCDC",
        color:"black",
        borderRadius:20,
        width:Dimensions.get('window').width * 0.85,
        textAlign:"center",
    },
    descriptionsearch:{
        padding:10,
        backgroundColor:"#DCDCDC",
        color:"black",
        borderRadius:20,
        width:Dimensions.get('window').width * 0.85,
        textAlign:"center",
        height:200,
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
    }, 
    previewImage: {
        top:20,
        width:200,
        height: 200
    }


  });

  const mapStateToProps = state => {
    return {
        user: state.user
    }
  }
  
  export default connect(
    mapStateToProps,
  )(UploadNewItem)