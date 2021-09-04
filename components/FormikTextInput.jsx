import React from "react";
import { StyleSheet, View } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: "#d73a4a",
  },
  input: {
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    paddingLeft: 10,
  },
  errorInput: {
    borderColor: "#d73a4a",
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={{ marginBottom: 10 }}>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        style={[styles.input, showError && styles.errorInput]}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;
