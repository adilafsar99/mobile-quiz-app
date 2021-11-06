import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native';
import DEFAULT from '../../assets/images/logo.png';
import {
  useSelector
} from 'react-redux';

const Result = ({
  navigation
}) => {
  const [result, setResult] = useState(useSelector(state => state.result));
  const showQuizList = () => {
    setResult(null);
    navigation.navigate('QuizList');
  };
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
        <View style={styles.userPicContainer}>
          {/*<Image resizeMode="contain" style={styles.userPic} source={{uri: DEFAULT}} />*/}
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <View style={styles.attribute}>Your Score: </View>
            <View style={styles.value}>{result.score ? result.score: 0}</View>
          </View>
          <View style={styles.info}>
            <View style={styles.attribute}>Correct Choices: </View>
            <View style={styles.value}>{result.correctChoices ? result.correctChoices: 0}</View>
          </View>
          <View style={styles.info}>
            <View style={styles.attribute}>Wrong Choices: </View>
            <View style={styles.value}>{result.wrongChoices ? result.wrongChoices: 0}</View>
          </View>
          <View style={styles.info}>
            <View style={styles.attribute}>Skipped: </View>
            <View style={styles.value}>{result.skipped ? result.skipped : 0}</View>
          </View>
          <View style={styles.choices}>
            <TouchableOpacity onPress={() => Alert.alert("Choices")}>
                <Text style={styles.choicesHeading}>
                  Your Choices
                </Text>
              </TouchableOpacity>
            {result.userChoices?.map((userChoice, i) => (
              <View style={userChoice.result ? styles.correctChoice : styles.wrongChoice} key={i}>
                <Text style={{color: "#fff"}}>
                  {userChoice.choice}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => showQuizList()} activeOpacity={0.7}>
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
    textAlign: "center"
  },
  subtitle: {
    width: "100%",
    color: "#7d7d7d",
    fontSize: 16,
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
  userPicContainer: {
    width: "80%",
    borderRadius: 100,
    marginHorizontal: "auto",
    paddingHorizontal: 40,
    backgroundColor: "#000"
  },
  userPic: {
    width: 200,
    height: 200
  },
  infoContainer: {
    width: "85%",
    marginHorizontal: "auto",
    marginTop: 10,
    marginBottom: 20,
  },
  info: {
    flexDirection: "row",
    height: 50,
    fontSize: 18,
    marginBottom: 15
  },
  attribute: {
    width: "50%",
    justifyContent: "center",
    color: "#8e8e8e",
    backgroundColor: "#cbcbcb",
    textAlign: "center",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40
  },
  value: {
    width: "50%",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#39eb9a",
    textAlign: "center",
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40
  },
  choices: {
    width: "85%",
    marginHorizontal: "auto",
    textAlign: "center",
    border: "2px solid #7d7d7d",
    borderRadius: 20,
    paddingHorizontal: 10
  },
  choicesHeading: {
    fontSize: 16,
    padding: 10,
    fontWeight: "800",
    color: "#7d7d7d"
  },
  correctChoice: {
    marginBottom: 15,
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#39eb9a",
  },
  wrongChoice: {
    marginBottom: 15,
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#ff5656",
  },
  buttonContainer: {
    width: "85%",
    marginHorizontal: "auto",
    marginBottom: 20
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
    backgroundColor: "#39eb9a",
    marginHorizontal: "auto",
    marginVertical: 5
  }
});

export default Result;