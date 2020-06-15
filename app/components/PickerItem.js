import React from "react";
import AppText from "./AppText";
import styles from "../config/styles";
import AppTextInput from "./AppTextInput";
import { TouchableOpacity, StyleSheet } from "react-native";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
export default PickerItem;
