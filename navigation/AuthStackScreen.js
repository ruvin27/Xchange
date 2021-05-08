import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'

const AuthStack = createStackNavigator()
const AuthStackScreen = () => (
        <AuthStack.Navigator screenOptions={{
          headerShown: false
        }}>
          <AuthStack.Screen
            name='Login'
            component={Login}
          />
          <AuthStack.Screen
            name='Signup'
            component={Signup}
          />
        </AuthStack.Navigator>
  )

  export default AuthStackScreen;