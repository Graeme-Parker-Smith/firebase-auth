import React, { useState } from "react";
import { View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import axios from "axios";
import firebase from "firebase";

const ROOT_URL =
  "https://us-central1-one-time-password-45f00.cloudfunctions.net";

const SignInForm = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  const getCode = async () => {
    try {
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone });
      console.log("Code fetched!");
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone,
        code
      });
      await firebase.auth().signInWithCustomToken(data.token);
      console.log("firebase authorized!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <>
        <Input
          label="Enter Phone Number"
          containerStyle={{ marginBottom: 10, width: 300 }}
          placeholder="e.g. 5555555555"
          value={phone}
          onChangeText={setPhone}
        />
        <Button onPress={getCode} title="Get Code" />
      </>
      <>
        <Input
          label="Enter Code"
          containerStyle={{ marginBottom: 10, width: 300 }}
          placeholder="e.g. 1234"
          value={code}
          onChangeText={setCode}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </>
    </View>
  );
};

export default SignInForm;
