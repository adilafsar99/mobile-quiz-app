import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Camera from '../../components/camera';

const UserPic = ({navigation}) => {
  return(
    <View>
      <View>
        <Text style={styles.title}>
          User Pic
        </Text>
        <Text style={styles.subtitle}>
          Take your photo
        </Text>  
      </View>
      <View>
        <Camera />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Questions')} activeOpacity={0.7}>
          <Text style={styles.button}>
            Capture
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
    padding: 5,
    marginBottom: 10,
    textAlign: "center"
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
});

export default UserPic;