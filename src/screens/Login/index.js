import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const Login = ({setShowSignup, setShowLogin, setShowResetPassword}) => {
  const showSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };
  const showResetPassword = () => {
    setShowResetPassword(true);
    setShowLogin(false);
  };
  return(
    <View>
      <View>
        <Text style={styles.title} >
          Login
        </Text>
        <Text style={styles.subtitle} >
          Add your details to login
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput keyboardType="email-address" maxLength={30} autoFocus={true} placeholder="Your Email" style={styles.input} />
        <TextInput secureTextEntry={true} maxLength={14} placeholder="Password" style={styles.input} />
      </View>
      <View style={styles.buttonContainer} >
        <TouchableOpacity activeOpacity={0.7} >
          <Text style={styles.button}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.forgotPasswordLink} >
        <Text style={{color: "#7d7d7d"}} >
          <a onClick={() => showResetPassword()} >Forgot password?</a>
        </Text>
      </View>
      <View>
        <Text style={styles.signupText}>
          Don't have an Account?&nbsp;
          <a onClick={() => showSignup()}>
            <Text style={styles.signupLink} >Sign Up</Text>
          </a>
        </Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    width: "100%",
    color: "#767e80",
    fontSize: 45,
    padding: 10,
    textAlign: "center"
  },
  subtitle: {
    width: "100%",
    color: "#7d7d7d",
    fontSize: 16,
    padding: 5,
    textAlign: "center"
  },
  inputContainer: {
    width: "80%",
    marginHorizontal: "auto",
    marginTop: 20
  },
  input: {
    height: 60,
    backgroundColor: "#e7e7e7",
    borderRadius: 25,
    marginBottom: 25,
    paddingHorizontal: 20
  },
  buttonContainer: {
    width: "85%",
    marginHorizontal: "auto",
    marginTop: 10,
    marginBottom: 20
  },
  button: {
    width: "100%",
    height: 70,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#000",
    paddingVertical: 25,
    borderRadius: 40,
    fontSize: 16,
    backgroundColor: "#39eb9a"
  },
  forgotPasswordLink: {
    textAlign: "center",
    marginBottom: 20
  },
  signupText: {
    textAlign: "center",
    color: "#7d7d7d"
  },
  signupLink: {
    fontWeight: "bolder",
    color: "#08ad69"
  }
});

export default Login;