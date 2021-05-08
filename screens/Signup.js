import React from 'react'
import { View, TextInput, StyleSheet, Text, TouchableHighlight, Alert } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, signup, updateName, updatePhone } from '../actions/user'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmpass : ""
    };
  }
    handleSignUp = () => {
            if(this.state.confirmpass==this.props.user.password){

              this.props.signup()
            }
            else{
              Alert.alert("Passwords do not match")
            }
    }

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.titleContainter}> 
            <Text style={styles.titleText}>Welcome!</Text>
      
            </View>
      
            <View style={styles.formContainer}> 
                <Text style={styles.labelText}>USERNAME</Text>
                <View style={styles.TextInputContainerParent}>
          
      
                      <View style={styles.TextInputContainer}>
                          <TextInput 
                                  autoCorrect={false}
                                placeholder="eg:Alexios Shaw"
                                  style= {styles.inputStyle}
                                  placeholderTextColor ="grey"
                                  onChangeText={name => this.props.updateName(name)}
                                />
                          </View>
                    </View>
                <View style={{height:8}}></View>
                  <Text style={styles.labelText}>EMAIL ID</Text>
                  <View style={styles.TextInputContainerParent}>
            
      
                    <View style={styles.TextInputContainer}>
                      <TextInput 
                              autoCorrect={false}
                            placeholder="eg:sam070@gmail.com"
                          onChangeText={email => this.props.updateEmail(email)}
                              style= {styles.inputStyle}
                              placeholderTextColor ="grey"
                            />
                      </View>
                </View>
                <View style={{height:8}}></View>
                <Text style={styles.labelText}>PHONE NUMBER</Text>
                  <View style={styles.TextInputContainerParent}>
            
      
                    <View style={styles.TextInputContainer}>
                      <TextInput 
                              autoCorrect={false}
                            placeholder="eg:8553098564"
                            onChangeText={phone => this.props.updatePhone(phone)}
                              style= {styles.inputStyle}
                              placeholderTextColor ="grey"
                            />
                      </View>
                </View>
                <View style={{height:8}}></View>
                <Text style={styles.labelText}>PASSWORD</Text>
                  <View style={styles.TextInputContainerParent}>
            
      
                    <View style={styles.TextInputContainer}>
                      <TextInput 
                              autoCorrect={false}
                              secureTextEntry={true}
                            placeholder="****************"
                          onChangeText={password => this.props.updatePassword(password)}
                              style= {styles.inputStyle}
                              placeholderTextColor ="grey"
                            />
                      </View>
                </View>
                <View style={{height:8}}></View>
                <Text style={styles.labelText}>CONFIRM PASSWORD</Text>
                  <View style={styles.TextInputContainerParent}>
            
      
                    <View style={styles.TextInputContainer}>
                      <TextInput 
                              autoCorrect={false}
                            placeholder="****************"
                            value = {this.state.confirmpass}
                            onChangeText={value => this.setState({
                              confirmpass: value
                            })}
                            secureTextEntry={true}
                              style= {styles.inputStyle}
                              placeholderTextColor ="grey"
                            />
                      </View>
                </View>
                <View style={{height:8}}></View>
      
      
      
                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <TouchableHighlight  underlayColor={"dodgerblue"} style = {styles.button} onPress={this.handleSignUp}>
                    <View style={styles.button}>
      
                    <Text style={{color:"white",fontSize:25,fontFamily:"sans-serif-medium",fontWeight:"400"}}>REGISTER</Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight  underlayColor={"white"}  onPress={() => this.props.navigation.navigate('Login')}>
                      <View>
                      <Text style={{color:"grey",fontSize:16,marginTop:20,fontFamily:"sans-serif-medium",fontWeight:"100"}}>Login</Text>
                      </View>
                    </TouchableHighlight>
                   </View>
        
      
      
      
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
  
    },
    titleContainter:{
      height:85,
      padding:2,
  
      justifyContent:"flex-end",
      
      paddingLeft:29
    },
    
    titleText:{
      fontSize:30,
      fontFamily:"sans-serif-medium",
      fontWeight:'bold',
      color:"black",
  
    },
    formContainer:{
      flex:3,
      // backgroundColor:"blue",
      paddingTop:10,
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
    return bindActionCreators({ updateEmail, updatePassword, signup, updateName, updatePhone }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup)