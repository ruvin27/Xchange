import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateuid } from '../actions/user'
import Firebase from '../config/Firebase'

const button = ({user, updateuid}) =>{
    const handleSignout = (updateuid ) => {
        Firebase.auth().signOut()
        updateuid("")
    } 
    useEffect(() => {
       handleSignout(updateuid)
      }, []);
      return(
        <>
        </>
      );
 }
 const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateuid }, dispatch)
  }
  
  const mapStateToProps = state => {
    return {
        user: state.user
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(button)