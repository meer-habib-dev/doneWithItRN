import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../config/colors";
const ViewImageScreen = () => {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={"white"} size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={"white"}
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/viewimage.jpg")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  imageContainer: {
    backgroundColor: "#000",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
