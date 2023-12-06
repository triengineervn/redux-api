import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";

import MyTextInput from "../MyTextInput";
import MyButton from "../MyButton";
const LoginView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View styles={styles.container}>
      <View style={{ height: 60 }} />
      <Text style={styles.header}>Login To Do App</Text>
      <View style={{ height: 24 }} />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png",
        }}
        style={styles.logo}
      ></Image>
      <View style={{ height: 60 }} />
      <MyTextInput
        placeholder="Username"
        value={username}
        onChangeText={(username) => {
          setUsername(username);
        }}
      />
      <View style={{ height: 12 }} />
      <MyTextInput
        placeholder="Password"
        value={password}
        onChangeText={(password) => {
          setPassword(password);
        }}
      />
      <View style={{ height: 12 }} />
      <MyButton text={"Login"} />
    </View>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: 500,
    alignSelf: "center",
  },
  logo: {
    height: 120,
    width: 200,
    resizeMode: "center",
    alignSelf: "center",
  },
});
