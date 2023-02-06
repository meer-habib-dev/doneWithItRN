import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={10}
      source={require("../assets/hero-image.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/download.png")} />

        <Text style={styles.tagline}>Sell what you dont need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title={"Login"}
          color="primary"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title={"Register"}
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
        <View style={styles.registerButton}></View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  tagline: {
    fontSize: 28,
    fontWeight: "600",
    paddingVertical: 20,
    color: "black",
  },
});

export default WelcomeScreen;
