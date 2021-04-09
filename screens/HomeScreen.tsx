import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import GlassSheet from "../components/GlassSheet";
import ProgressBar from "../components/ProgressBar";
import BackgroundImage from "../components/BackgroundImage";
import ColorfulButton from "../components/ColorfulButton";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({}) {
  return (
    <SafeAreaView style={styles.container}>
      <BackgroundImage
        imgPath={require("../assets/pexels-roberto-nickson-2486168.jpg")}
      />
        <ScrollView >
          <View style={styles.progressWrapper}>
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

            <ProgressBar
              goal={15}
              amountDone={4}
              color="#2089DC"
              title="Eat healthy"
              time="monthly"
              icon="heartbeat"
            />

          <ColorfulButton
              title="Add goal"
              onPress={() => console.log("pressed")}
            />
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    
    
  },
  progressWrapper: {
    alignItems: "center",
    justifyContent: "center",
  }
});

/**
 *  
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

 */
