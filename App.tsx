import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Incrementer from "./components/Incrementer";
import GlassSheet from "./components/GlassSheet";
import ProgressBar from "./components/ProgressBar";

import BackgroundImage from "./components/BackgroundImage";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <BackgroundImage imgPath={require("./assets/pexels-roberto-nickson-2486168.jpg")}>
          <GlassSheet color="dark">
            <ProgressBar
              goal={7}
              amountDone={2}
              color="#2089DC"
              title="Stretch"
              time="daily"
              icon="heartbeat"
            />
            <ProgressBar
              goal={10}
              amountDone={21}
              color="#2089DC"
              title="Workout"
              time="daily"
              icon="heartbeat"
            />
            <ProgressBar
              goal={15}
              amountDone={4}
              color="#2089DC"
              title="Eat healthy"
              time="monthly"
              icon="heartbeat"
            />
          </GlassSheet>
          <GlassSheet color="green">
            <Text style={{ margin: 10, backgroundColor: "transparent" }}>
              {" "}
              Check out the counters above me!{" "}
            </Text>
          </GlassSheet>
          <GlassSheet color="red">
            <Text style={{ margin: 10 }}>
              {" "}
              If you see this red box you've probably done something wrong!{" "}
            </Text>
          </GlassSheet>
        </BackgroundImage>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
