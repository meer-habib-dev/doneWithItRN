import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/Forms";
import loginApi from "../api/auth";
import { useAuth } from "../auth/useAuth";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Email"),
});
const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const { login } = useAuth();
  const handleSubmit = async ({ email, password }) => {
    const result = await loginApi.login(email, password);

    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    login(result.data);
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <ErrorMessage
        error={"Invaild Email and/or Password"}
        visible={loginFailed}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon={"email"}
          keyboardType={"email-address"}
          placeholder="Email"
          textContentType="emailAddress"
          name="email"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon={"lock"}
          secureTextEntry
          placeholder="Password"
          textContentType="password"
          name="password"
        />

        <SubmitButton title={"Login"} />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});
