import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";
const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton onPress={handleSubmit} title={title} />;
};

export default SubmitButton;

const styles = StyleSheet.create({});
