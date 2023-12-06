import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MyButton = ({ text }) => {
  const navigaion = useNavigation();
  return (
    <Pressable
      style={styles.btn}
      onPress={() => {
        navigaion.navigate("HomeScreen");
      }}
    >
      <Text style={styles.textBtn}>{text}</Text>
    </Pressable>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#195abd",
    padding: 12,
    marginHorizontal: 24,
    borderRadius: 5,
  },
  textBtn: {
    color: "white",
    fontSize: 18,
    fontWeight: 500,
    textAlign: "center",
  },
});
