import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import GlassSheet from "../components/GlassSheet";
import ProgressBar from "../components/ProgressBar";
import BackgroundImage from "../components/BackgroundImage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ColorfulButton from "../components/ColorfulButton";

export default function HomeScreen({}) {
  return (
    <View style={styles.container}>
      <BackgroundImage
        imgPath={require("../assets/pexels-roberto-nickson-2486168.jpg")}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView >
            <View style={styles.progressWrapper}> 
            <ProgressBar
              goal={7}
              amountDone={2}
              color="#2089DC"
              title="Stretch"
              time="Daily"
              icon="heartbeat"
            />
            <ProgressBar
              goal={10}
              amountDone={21}
              color="#2089DC"
              title="Workout"
              time="Monthly"
              icon="heartbeat"
            />
            <ProgressBar
              goal={15}
              amountDone={4}
              color="#2089DC"
              title="Eat healthy"
              time="Weekly"
              icon="heartbeat"
            />

            <ProgressBar
              goal={15}
              amountDone={4}
              color="#2089DC"
              title="Read"
              time="Daily"
              icon="heartbeat"
            />
            <ProgressBar
              goal={15}
              amountDone={4}
              color="#2089DC"
              title="Do dishes"
              time="Daily"
              icon="heartbeat"
            />
            <ProgressBar
              goal={15}
              amountDone={4}
              color="#2089DC"
              title="Invest"
              time="Weekly"
              icon="heartbeat"
            />

            <ColorfulButton
              title="Add goal"
              onPress={() => console.log("pressed")}
            />
            </View>
          </ScrollView>
        </SafeAreaView>
      </BackgroundImage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
