// In App.js in a new project

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import BackgroundImage from "./components/BackgroundImage";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackgroundImage
        imgPath={require("./assets/pexels-roberto-nickson-2486168.jpg")}
      >
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName = "";

                if (route.name === "Home") {
                  iconName = focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "ios-list" : "ios-list";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "#FED1C0",
              inactiveTintColor: "#224554",
              style: {
                backgroundColor: "rgba(34,69,84, 0.5)",
                paddingBottom: 0,
              },
            }}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </BackgroundImage>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
