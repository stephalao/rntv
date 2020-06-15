import React, { useState } from "react";
import { Text, View } from "react-native";

import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import { TextInput } from "react-native";
import Screen from "./app/components/Screen";
import AppText from "./app/components/AppText";
import ListItem from "./app/components/ListItem";
import AppPicker from "./app/components/AppPicker";
import AccountScreen from "./app/screens/AccountScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppTextInput from "./app/components/AppTextInput";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  // const categories = [
  //   { label: "Furniture", value: 1 },
  //   { label: "Clothing", value: 2 },
  //   { label: "Cameras", value: 3 },
  // ];

  // const [firstName, setFirstName] = useState("");
  // const [category, setCategory] = useState(categories[0]);

  return <LoginScreen />;
}
