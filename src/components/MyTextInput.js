import { StyleSheet, TextInput } from "react-native";
import React from "react";

const MyTextInput = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  textInput: {
    marginHorizontal: 24,
    padding: 12,
    borderWidth: 1,
    borderRadius: 5,
  },
});
