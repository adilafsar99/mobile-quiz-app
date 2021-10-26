import React, {
  useState
} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const Signup = ({
  setShowSignup, setShowLogin
}) => {
  const showLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };
  return(
    <View>
      <View>
        <Text style={styles.title}>
          Sign Up
        </Text>
        <Text style={styles.subtitle}>
          Add your details to sign up
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput maxLength={30} autoFocus={true} placeholder="Name" style={styles.input} />
        <TextInput maxLength={30} keyboardType="email-address" placeholder="Email" style={styles.input} />
        <TextInput secureTextEntry={true} maxLength={14} placeholder="Password" style={styles.input} />
        <TextInput secureTextEntry={true} maxLength={14} placeholder="Confirm Password" style={styles.input} />
      </View>
      <View style={styles.buttonContainer} >
        <TouchableOpacity onPress={() => showLogin()} activeOpacity={0.7}>
          <Text style={styles.button}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.loginText}>
          Already have an Account?&nbsp;
          <a onClick={() => showLogin()}>
            <Text style={styles.loginLink} >Login</Text>
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
  loginText: {
    textAlign: "center",
    color: "#7d7d7d"
  },
  loginLink: {
    fontWeight: "bolder",
    color: "#08ad69"
  }
});

export default Signup;