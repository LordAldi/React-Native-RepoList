import { Formik } from "formik";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import * as yup from "yup";

const initialValues = {
  email: "",
  password: "",
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    height: 50,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="email" placeholder="Email" />
      <FormikTextInput secureTextEntry name="password" placeholder="Password" />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text color="white">Signin</Text>
      </Pressable>
    </View>
  );
};
const validationSchema = yup.object().shape({
  email: yup.string().email("must a valid email").required("Email is Required"),
  password: yup
    .string()
    .min(8)
    .max(16)
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
      "password must have 8 characters, and at least 1 number"
    )
    .required(),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
