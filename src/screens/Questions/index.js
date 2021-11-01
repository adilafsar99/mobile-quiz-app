import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';

const Questions = ({
  navigation
}) => {
  return(
    <ScrollView>
    <View>
      <View>
        <Text style={styles.title}>
          Questions
        </Text>
        <Text style={styles.subtitle}>
          Question 1
        </Text>
        <Text style={styles.question}>
          What is the correct option?
        </Text>
      </View>
      <View style={styles.optionsContainer}>
        <Text style={styles.option}>
          Option 1
        </Text>
        <Text style={styles.option}>
          Option 2
        </Text>
        <Text style={styles.option}>
          Option 3
        </Text>
        <Text style={styles.option}>
          Option 4
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Result')} activeOpacity={0.7}>
          <Text style={styles.button}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
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
  question: {
    width: "100%",
    color: "#7d7d7d",
    fontSize: 16,
    padding: 5,
    textAlign: "center"
  },
  optionsContainer: {
    width: "80%",
    marginHorizontal: "auto",
    marginTop: 20
  },
  option: {
    height: 60,
    backgroundColor: "#e7e7e7",
    borderRadius: 25,
    marginBottom: 25,
    paddingTop: 20,
    textAlign: "center",
    fontSize: 18,
    color: "#7d7d7d"
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
  }
});

export default Questions;