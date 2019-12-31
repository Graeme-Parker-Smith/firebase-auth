import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

export default function App() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAgocpV1VAw1kUWEL4RwCWPFVK3j4mgFt4",
      authDomain: "one-time-password-45f00.firebaseapp.com",
      databaseURL: "https://one-time-password-45f00.firebaseio.com",
      projectId: "one-time-password-45f00",
      storageBucket: "one-time-password-45f00.appspot.com",
      messagingSenderId: "847501732571",
      appId: "1:847501732571:web:644445b4946177b35ebafe",
      measurementId: "G-ZGE5XYSEPC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <SignUpForm />
      <Text style={styles.header}>Sign In</Text>
      <SignInForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    margin: 30
  }
});
