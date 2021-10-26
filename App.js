import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {Signup, Login, ResetPassword, ChangePassword} from './src/screens';

export default function App() {
  const [showSignup, setShowSignup] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {showSignup ? <Signup setShowSignup={setShowSignup} setShowLogin={setShowLogin} /> : showLogin ? <Login setShowSignup={setShowSignup} setShowLogin={setShowLogin} setShowResetPassword={setShowResetPassword} /> : showResetPassword ? <ResetPassword setShowNewPassword={setShowNewPassword} setShowResetPassword={setShowResetPassword} /> : <ChangePassword setShowLogin={setShowLogin} setShowNewPassword={setShowNewPassword} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
