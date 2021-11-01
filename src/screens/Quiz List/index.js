import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Camera from '../../components/camera';

const QuizList = ({
  navigation
}) => {
  const startQuiz = () => {
    navigation.navigate('UserPic')
  }
  return(
    <View>
      <View>
        <Text style={styles.title}>
          Quiz List
        </Text>
        <Text style={styles.subtitle}>
          Touch the quiz you want to take
        </Text>
      </View>
      <View style={styles.quizContainer} >
        <Text onPress={() => startQuiz()} style={styles.quiz} >
          General Knowledge
        </Text>
        <Text onPress={() => startQuiz()} style={styles.quiz} >
          Sports
        </Text>
        <Text onPress={() => startQuiz()} style={styles.quiz} >
          Web Development
        </Text>
        <Text onPress={() => startQuiz()} style={styles.quiz} >
          World Affairs
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
  quizContainer: {
    width: "80%",
    marginHorizontal: "auto",
    marginTop: 20
  },
  quiz: {
    height: 60,
    backgroundColor: "#e7e7e7",
    borderRadius: 25,
    marginBottom: 25,
    paddingTop: 20,
    textAlign: "center",
    fontSize: 18,
    color: "#7d7d7d"
  }
});

export default QuizList;