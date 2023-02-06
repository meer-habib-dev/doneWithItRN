import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/Forms";
import usersApi from "../api/user";
import authApi from "../api/auth";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { useAuth } from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [error, setError] = useState();
  const auth = useAuth();
  const registerAPi = useApi(usersApi.register);
  const loginAPi = useApi(authApi.login);
  const handleSubmit = async (userInfo) => {
    const result = await registerAPi.request(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred");
        console.log("error", result);
      }
      return;
    }

    const { data: authToken } = await loginAPi.request(
      userInfo.email,
      userInfo.password
    );
    auth.login(authToken);
  };
  return (
    <>
      <ActivityIndicator visible={registerAPi.loading || loginAPi.loading} />
      <Screen style={styles.container}>
        {error && <AppText>{error}</AppText>}
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
