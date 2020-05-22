import React from "react";
import { Text, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
      <Card
        title="Tommy red cord jacket for sale"
        subtitle="100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
