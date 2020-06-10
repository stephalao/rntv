import React, { useState } from "react";
import { Text, View } from "react-native";

import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import { TextInput } from "react-native";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
      />
    </Screen>
    // </View>
    // <ListingDetailsScreen />
    // <MessagesScreen />
    // <ListingsScreen />
  );
}
