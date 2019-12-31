import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

export default function App() {
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
