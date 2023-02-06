import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import { ErrorMessage } from ".";
const AppFormPicker = ({
  name,
  items,
  placeholder,
  numberOfColumn,
  PickerItemComponent,
}) => {
  const { errors, values, touched, setFieldValue } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
        numberOfColumn={numberOfColumn}
        setSelectedItem={(item) => {
          setFieldValue(name, item);
        }}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
