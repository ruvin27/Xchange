import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'
import AuthStackScreen from './AuthStackScreen'
import { StatusBar } from 'expo-status-bar';
import DrawerScreens from './DrawerNavigation'


const Stack = createStackNavigator()

const MainStackNavigator = ({user}) => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        {user.uid!="" ? (
      <Stack.Screen
        name="App"
        component={DrawerScreens}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <Stack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    )
  }

  

  const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
)(MainStackNavigator)