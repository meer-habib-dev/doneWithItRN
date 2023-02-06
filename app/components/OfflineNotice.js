import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
const OfflineNotice = () => {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: Constants.statusBarHeight,
    width: "100%",
  },
  text: {
    color: "white",
  },
});
