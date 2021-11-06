import {
  StatusBar
} from 'expo-status-bar';
import React, {
  useState,
  useEffect
} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {
  Signup,
  Login,
  ResetPassword,
  ChangePassword,
  QuizList,
  UserPic,
  Questions,
  Result
} from './src/screens';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Provider
} from 'react-redux';
import store from './src/store';
import {
  auth,
  onAuthStateChanged
} from './src/config/Firebase/Firebase';

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

export default function App() {
  const [isAuth,
    setIsAuth] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
    })
  }, []);
  return(
    <Provider store={store}>
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="QuizList">
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={ { title: 'Sign Up' }} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={ { title: 'Login' }} />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={ { title: 'Reset Password' }} />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={ { title: 'New Password' }} />
        <Stack.Screen
          name="QuizList"
          component={QuizList}
          options={ { title: 'Quiz List' }} />
        <Stack.Screen
          name="UserPic"
          component={UserPic}
          options={ { title: 'User Pic' }} />
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={ { title: 'Questions' }} />
        <Stack.Screen
          name="Result"
          component={Result}
          options={ { title: 'Result' }} />
      </Stack.Navigator> </NavigationContainer>
      </Provider>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#c1c1c1"
    },
  });