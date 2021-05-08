import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet,View,ScrollView } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import Card from './Card'
export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.parentSearchContainer}>
          <View style={styles.searchContainer}>
                  <View >
                      <TextInput placeholder="Search" style={styles.search}/>
                  </View>
          </View>
        </View>
        
        <View style={styles.cardContainer}>
          <ScrollView contentContainerStyle={{ flexGrow: 1,alignItems:"center"}}>
              <Card navigation={navigation}/>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
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

});
