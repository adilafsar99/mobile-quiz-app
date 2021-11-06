import React, {
  useState,
  useEffect
} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import CountDown from 'react-native-countdown-component';

const Questions = ({
  navigation
}) => {
  const [remainingTime, setRemainingTime] = useState(180);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSelected, setIsSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [correctChoices, setCorrectChoices] = useState(0);
  const [wrongChoices, setWrongChoices] = useState(0);
  const [userChoices, setUserChoices] = useState([]);
  const quizIndex = useSelector(state => state.quizList.quizIndex);
  const questions = useSelector(state => state.questions.questions[quizIndex]);
  const questionObj = questions[currentQuestion];
  const dispatch = useDispatch();
  const finishQuiz = () => {
    dispatch({
        type: "createResult",
        score,
        userChoices,
        skipped,
        correctChoices,
        wrongChoices
      });
    setRemainingTime(180);
    setCurrentQuestion(0);
    setIsSelected(null);
    navigation.navigate('Result');
  }
  const changeQuestion = () =>  {
    if (isSelected === null) {
      setSkipped(skipped + 1);
    }
    else if (questionObj.choices[isSelected] === questionObj.correctChoice) {
      setScore(score + 10);
      setCorrectChoices(correctChoices + 1);
    }
    else {
      setWrongChoices(wrongChoices + 1);
    }
    const arr = [...userChoices];
    isSelected !== null && arr.push({
      choice: questionObj.choices[isSelected],
      result: questionObj.choices[isSelected] === questionObj.correctChoice
    });
    setUserChoices(arr);
    if (currentQuestion + 1 < questions.length) {
      setIsSelected(null);
      setCurrentQuestion(currentQuestion + 1);
    }
    else {
      finishQuiz();
    }
  };
  return(
    <ScrollView>
    <View>
        <View>
          <Text style={styles.title}>
            Questions
          </Text>
          <CountDown
            size={20}
            until={remainingTime}
            onFinish={() => finishQuiz()}
            digitStyle={{backgroundColor: '#fff', borderWidth: 2, borderColor: '#1cc625'}}
            digitTxtStyle={{color: '#1cc625'}}
            timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
            separatorStyle={{color: '#1CC625'}}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
            showSeparator
          />
          <Text style={styles.subtitle}>
            Question {currentQuestion + 1}
          </Text>
          <Text style={styles.question}>
            {questionObj.question}
          </Text>
        </View>
        <View style={styles.optionsContainer}>
          {questionObj.choices.map((choice, i) => (
            <TouchableOpacity activeOpacity={0.7} onPress={() => setIsSelected(i)} style={isSelected === i ? styles.selectedOption : styles.option} key={i}>
              <Text style={{color: "#7d7d7d", fontSize: 18}} >{choice}</Text>
           </TouchableOpacity>
          ))}
        </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => changeQuestion()} activeOpacity={0.7}>
          <Text style={styles.button}>
            {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
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
    textAlign: "center"
  },
  timer: {
    width: "20%",
    marginHorizontal: "auto",
    borderRadius: 20,
    color: "#fff",
    fontSize: 16,
    padding: 5,
    textAlign: "center",
    backgroundColor: "#39eb9a"
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
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#e7e7e7",
    borderRadius: 25,
    marginBottom: 25,
    textAlign: "center",
    alignItems: "center"
  },
  selectedOption: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#000",
    borderRadius: 25,
    marginBottom: 25,
    paddingTop: 20,
    textAlign: "center",
    alignItems: "center",
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
    paddingVertical: 25,
    borderRadius: 40,
    fontSize: 16,
    backgroundColor: "#39eb9a"
  }
});

export default Questions;