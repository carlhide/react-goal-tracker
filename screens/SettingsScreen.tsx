import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GlassSheet from "../components/GlassSheet";
import BackgroundImage from "../components/BackgroundImage";
import BottomNavigator from "../components/BottomNavigator";

export default function SettingsScreen() {
  return (
      <View style={styles.container}>
        <BackgroundImage imgPath={require("../assets/pexels-roberto-nickson-2486168.jpg")}>
          <GlassSheet color="dark">
              
          </GlassSheet>
        </BackgroundImage>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    
  }
});
