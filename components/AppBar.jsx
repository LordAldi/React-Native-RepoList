import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    paddingBottom: 10,
    backgroundColor: "#535353",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text color="white" fontWeight="bold">
            Repositories
          </Text>
        </Link>

        <Link to="/signin">
          <Text color="white" fontWeight="bold">
            Signin
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
