import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text Pressed");
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text onPress={handlePress}>Hello JoCD!</Text>
      <TouchableHighlight onPress={() => console.log("Image Tapped!")}>
        <Image
          blurRadius={2}
          source={{ width: 200, height: 200, uri: "https://picsum.photos/600" }}
        />
      </TouchableHighlight> */}
      <Button
        color="orange"
        title="Click Me"
        onPress={() => console.log("Button Tapped!")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
