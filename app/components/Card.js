import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/color";
import AppText from "./AppText";

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.white,
  },
  image: {
    height: 200,
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    fontWeight: "bold",
    color: colors.secondary,
  },
});
export default Card;
