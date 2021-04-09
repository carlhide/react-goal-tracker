import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TouchableOpacityProps,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";

interface IProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

interface IState {}

export default class ColorfulButton extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      onPress: this.props.onPress,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.wrapper}>
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <LinearGradient
          style={[
            styles.container,
            {
              width: "100%",
              alignContent: "flex-end"
            },
          ]}
          colors={["#3f88b4", "#6CB9C7", "#EEAAAC"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.0, y: 0.25 }}
          locations={[0.2, 0.5, 0.8]}
        >
          <Text style={styles.text}>{this.props.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {

    borderRadius: 10,
    margin: 10
  },
  container: {
    height: 50,
    width: 120,
    
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 10,
    
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,

  },
  menuItem: {},
  icon: {},
  text: {
    color: "#112637",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center"
  },
});