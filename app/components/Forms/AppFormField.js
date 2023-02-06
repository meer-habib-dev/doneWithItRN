import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
const AppFormField = ({ name, ...othersProps }) => {
  const {
    setFieldTouched,
    touched,
    errors,
    handleChange,
    values,
    setFieldValue,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        // autoCapitalize="none"
        // autoCorrect={false}
        // icon={"email"}
        // keyboardType={"email-address"}
        // placeholder="Email"
        // textContentType="emailAddress"

        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        {...othersProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
