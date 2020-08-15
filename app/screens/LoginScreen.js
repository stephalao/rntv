import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import AppTextInput from "../components/AppTextInput";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            />
            {/* <ErrorMessage error={errors.email} /> */}
            <AppTextInput
              icon="lock"
              secureTextEntry
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Password"
              textContentType="password"
              onChangeText={handleChange("password")}
            />
            {/* <ErrorMessage error={errors.password} /> */}
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
});
export default LoginScreen;
