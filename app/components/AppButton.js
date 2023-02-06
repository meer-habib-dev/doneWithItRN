import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

const AppButton = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.Button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.Text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  Button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    // backgroundColor: colors.primary,
    borderRadius: 50,
    marginVertical: 10,
  },
  Text: {
    fontSize: 18,
    color: "#fff",
  },
});
