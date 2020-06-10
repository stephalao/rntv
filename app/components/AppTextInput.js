import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../config/color";

function AppTextInput() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons />
      <TextInput />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: "100%",
    borderRadius: 25,
    marginVertical: 10,
    flexDirection: "row",
    backgroundColor: color.light,
  },
});

export default AppTextInput;
