import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GlassSheet from "../components/GlassSheet";
import BackgroundImage from "../components/BackgroundImage";
import ColorfulButton from "../components/ColorfulButton";

export default function SettingsScreen() {


  var handlePress = () => {
    console.log("clicked");
  
  };

  return (
    <View style={styles.container}>
      <BackgroundImage
        imgPath={require("../assets/pexels-roberto-nickson-2486168.jpg")}
      />
      <GlassSheet color="dark">
        <ColorfulButton
          title="New Goal"
          onPress={handlePress}
        />
      </GlassSheet>
     
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
  text: {},
});
