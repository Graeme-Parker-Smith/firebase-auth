import React, { useState } from "react";
import { View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import axios from "axios";

const ROOT_URL =
  "https://us-central1-one-time-password-45f00.cloudfunctions.net";

const SignUpForm = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <>
        <Input
          label="Enter Phone Number"
          containerStyle={{ marginBottom: 10 }}
          placeholder="e.g. 5555555555"
          value={phone}
          onChangeText={setPhone}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </>
    </View>
  );
};

export default SignUpForm;
