import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {Signup, Login, ResetPassword, ChangePassword, QuizList, UserPic, Questions, Result} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer style={styles.container} >
      <Stack.Navigator initialRouteName="Signup" >
        <Stack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Sign Up'}} />
        <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Login'}} />
        <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{title: 'Reset Password'}}/>
        <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{title: 'New Password'}} />
        <Stack.Screen
        name="QuizList"
        component={QuizList}
        options={{title: 'Quiz List'}} />
        <Stack.Screen
        name="UserPic"
        component={UserPic}
        options={{title: 'User Pic'}} />
        <Stack.Screen
        name="Questions"
        component={Questions}
        options={{title: 'Questions'}} />
        <Stack.Screen
        name="Result"
        component={Result}
        options={{title: 'Result'}} />
      </Stack.Navigator>
    </NavigationContainer>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
