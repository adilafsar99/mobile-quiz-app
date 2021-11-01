import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import DEFAULT from '../../assets/images/logo.png';

const Result = ({navigation}) => {
  return(
    <View>
      <View>
        <Text style={styles.title}>
          Result
        </Text>
        <Text style={styles.subtitle}>
          The result of your choices
        </Text>
      </View>
      <View>
        <View>
          <Image source={{uri: DEFAULT}} />
        </View>
        <View>
          
        </View>
      </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.7}>
          <Text style={styles.button}>
            Retry
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.7}>
          <Text style={styles.button}>
            Back to list
          </Text>
        </TouchableOpacity>
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
  resultContainer: {
    width: "80%",
    marginHorizontal: "auto",
    marginTop: 20
  },
  result: {
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
    marginBottom: 20,
    display: "flex",
    flexWrap: "no-wrap"
  },
  button: {
    width: "40%",
    height: 70,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#000",
    paddingVertical: 25,
    borderRadius: 40,
    fontSize: 16,
    backgroundColor: "#39eb9a"
  }
});

export default Result;