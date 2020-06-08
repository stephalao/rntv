import React from "react";
import { Text, View } from "react-native";

import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return (
    // <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
    //   <Card
    //     title="Tommy red cord jacket for sale"
    //     subtitle="100"
    //     image={require("./app/assets/jacket.jpg")}
    //   />
    // </View>
    // <ListingDetailsScreen />
    // <MessagesScreen />
    <ListingsScreen />
  );
}
