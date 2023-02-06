import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: { width: "100%", height: 1, backgroundColor: "#f8f4f4" },
});

export default Separator;
