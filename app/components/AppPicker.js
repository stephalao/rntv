import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import Screen from "./Screen";
import defaultStyles from "../config/styles";

function AppPicker({ icon, items, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.color.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.color.medium}
            // style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen></Screen>
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => cons}
        />
      </Modal>
    </React.Fragment>
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
  text: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppPicker;
