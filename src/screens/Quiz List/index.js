import React, {
  useContext
} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {
  useSelector,
  useDispatch
} from 'react-redux';

const QuizList = ({
  navigation
}) => {
  const openCamera = (quizIndex) => {
    dispatch({
      type: "selectQuiz", quizIndex: quizIndex
    });
    navigation.navigate('UserPic');
  };
  const quizList = useSelector(state => state.quizList.quizList);
  const dispatch = useDispatch();
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
      <View style={styles.quizContainer}>
        {quizList.map((quiz, i) => (
        <ScrollView>
          <TouchableOpacity key={i} activeOpacity={0.7}>
            <Text onPress={() => openCamera(i)} style={styles.quiz}>
            {quiz}
            </Text>
          </TouchableOpacity>
        </ScrollView>
    ))}
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
    backgroundColor: "#39eb9a",
    borderRadius: 25,
    marginBottom: 25,
    paddingTop: 20,
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    fontWeight: "400"
  }
});

export default QuizList;