import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button, Icon, withTheme } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Incrementer() {
  const [count, setCount] = useState(0);

  var incrementCounter = () => {
    setCount(count + 1);
    console.log("Incremented by 1 to: " + count);
    Alert.alert("Simple Button pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.child}>You pressed the button {count} times</Text>
      <Button
        icon={<Icon name="arrow-right" size={40} color="black" />}
        title="hello"
        type="outline"
        onPress={() => incrementCounter()}
      />
      <Button title="Reset" type="clear" onPress={() => setCount(0)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    color: "white",
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },

  child: {
    margin: 10,
    color: "white",
  },
});
