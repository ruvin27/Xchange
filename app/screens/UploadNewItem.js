import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet, Text, View,Dimensions,TextInput} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
export default function UploadNewItem(){
    return(
        <View style={{flex: 1}}>
            <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle} >
                <View style={styles.parentdivcard}>
                    <View style={styles.card}>
                            <Text style={styles.uploadtext}>Click To Add Product Image</Text>

                    </View>
                </View>
            </TouchableOpacity>

            <View style={styles.searchContainer}>
                <View >
                    <TextInput placeholder="Product Name" style={styles.search}/>
                </View>
            </View>

            <View style={styles.searchContainer}>
                <View >
                    <TextInput placeholder="Description" style={styles.descriptionsearch} />
                </View>
            </View>

            <TouchableOpacity >
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
    }


  });