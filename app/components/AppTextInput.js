import React from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.color.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: "100%",
    borderRadius: 15,
    marginVertical: 10,
    flexDirection: "row",
    backgroundColor: defaultStyles.color.light,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
