import React from "react";
import { Image, StyleSheet, View } from "react-native";
import theme from "../theme";
import Stats from "./Stats";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 5,
  },
  info: {
    display: "flex",
    flexDirection: "row",
  },
  infoText: {
    marginLeft: 10,
  },
  languageContainer: {},
  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    alignSelf: "flex-start",
    padding: 5,
  },
  stats: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.infoText}>
          <Text color="textPrimary" fontWeight="bold">
            {item.fullName}
          </Text>
          <Text color="textSecondary">{item.description}</Text>

          <View style={styles.language}>
            <Text color="white">{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.stats}>
        <Stats counts={item.stargazersCount} label="Stars" />
        <Stats counts={item.forksCount} label="Forks" />
        <Stats counts={item.reviewCount} label="Reviews" />
        <Stats counts={item.ratingAverage} label="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;
