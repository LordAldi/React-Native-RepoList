import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Stats = ({ label, counts }) => {
  const kFormatter = (x) => {
    return Math.abs(x) > 999
      ? Math.sign(x) * (Math.abs(x) / 1000).toFixed(1) + "k"
      : Math.sign(x) * Math.abs(x);
  };
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" color="textPrimary">
        {kFormatter(counts)}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

export default Stats;
