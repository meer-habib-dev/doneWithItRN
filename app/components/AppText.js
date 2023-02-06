import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import defaultStyle from "../config/styles";
const AppText = ({ children, style, ...otherProps }) => {
  return (
    <>
      <Text style={[defaultStyle.text, style]} {...otherProps}>
        {children}
      </Text>
    </>
  );
};

export default AppText;

const styles = StyleSheet.create({});
