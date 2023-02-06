import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageInputList from "../ImageInputList";
import { ErrorMessage } from ".";
import { useFormikContext } from "formik";

const AppImagePicker = ({ name }) => {
  const { errors, values, setFieldValue, touched } = useFormikContext();
  const imageUris = values[name];
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppImagePicker;

const styles = StyleSheet.create({});
