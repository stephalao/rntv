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
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import AppText from "./app/components/AppText";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
    // </View>
    // <ListingDetailsScreen />
    // <MessagesScreen />
    // <ListingsScreen />
  );
}
