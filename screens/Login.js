import React from 'react'
import {  View, Text,TextInput, TouchableHighlight, StyleSheet ,Dimensions ,  KeyboardAwareView} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../actions/user'
import Firebase from '../config/Firebase'
class Login extends React.Component {
    componentDidMount = () => {
        Firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.getUser(user.uid)
            }
        })
    }
    handleLogin = () => {
        this.props.login()

    }

    render() {
        return (
            <View style={styles.container}>
      <View style={styles.titleContainter}> 
      <Text style={styles.titleText}>Hello.</Text>
      <Text style={styles.titleText}>Welcome Back</Text>
      </View>

      <View style={styles.formContainer}> 
          <Text style={styles.labelText}>EMAIL ID</Text>
          <View style={styles.TextInputContainerParent}>
    

                <View style={styles.TextInputContainer}>
                    <TextInput 
                            autoCorrect={false}
                            value={this.props.user.email}
                    onChangeText={email => this.props.updateEmail(email)}
                            style= {styles.inputStyle}
                            placeholderTextColor ="black"
                          />
                    </View>
              </View>
          <View style={{height:30}}></View>
            <Text style={styles.labelText}>PASSWORD</Text>
            <View style={styles.TextInputContainerParent}>
      

              <View style={styles.TextInputContainer}>
                <TextInput 
                        autoCorrect={false}            
                      secureTextEntry={true}
                    onChangeText={password => this.props.updatePassword(password)}
                        style= {styles.inputStyle}
                        placeholderTextColor ="black"
                      />
                </View>
          </View>
         


          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
              <TouchableHighlight  underlayColor={"dodgerblue"} style = {styles.button} onPress={() => this.props.login()}>
                  <View style={styles.button}>
                    <Text style={{color:"white",fontSize:25,fontFamily:"sans-serif-medium",fontWeight:"400"}}>LOGIN</Text>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight  underlayColor={"white"} onPress={() => this.props.navigation.navigate('Signup')}>
                <Text style={{color:"grey",fontSize:16,marginTop:40,fontFamily:"sans-serif-medium",fontWeight:"100"}}>Create Account</Text>
              </TouchableHighlight>
             </View>
  
    </View>

      </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      height:1000
  
    },
    titleContainter:{
      height:200,
      padding:10,
      justifyContent:"flex-end",
      
      paddingLeft:29
    },
    
    titleText:{
      fontSize:40,
      fontFamily:"sans-serif-medium",
      fontWeight:'bold',
      color:"black",
  
    },
    formContainer:{
      height:500,
      // backgroundColor:"blue",
      paddingTop:70,
    },
    TextInputContainerParent:{
      alignItems:"center",
      marginTop:10,
  
    },
    TextInputContainer:{
      fontFamily:"sans-serif-medium",
      borderBottomColor:"#DEDEDE",
      borderBottomWidth:1.5,
      width:"85%",
      height:40,
    },
    inputStyle:{
  
      backgroundColor:"#FFFFFF",
      fontSize:16,
      color:"black"
    
     
    },
    labelText:{
      fontFamily:"sans-serif-medium",
      marginTop:10,
      color:"#A9A9A9",
      fontSize:14,
      letterSpacing: 3,
      paddingLeft:29
    },
    button:{
      fontFamily:"sans-serif-medium",
      backgroundColor:"#5D9DFF",
      height:50,
      width:"80%",
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      fontWeight:"bold",
    }
  });
  
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)