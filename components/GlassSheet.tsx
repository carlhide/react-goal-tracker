import React from "react";
import { StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";

interface IProps {
  color: string; // RED, GREEN, LIGHT or DARK
}

interface IState {
  rendered: boolean;
  currentColor: string;
  currentOpacity: number;
}

const COLORS = {
  DARK: "rgba(1,1,1,0.4)",
  LIGHT: "rgba(255,255,255,0.3)",
  GREEN: "rgba(0, 203, 10, 0.354)",
  RED: "rgba(127, 0, 0, 0.341)",
};

export default class GlassSheet extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      rendered: false,
      currentColor: COLORS.DARK,
      currentOpacity: 1,
    };
  }

  componentDidMount() {
    if (this.props.color === "green") {
      this.setState({ currentColor: COLORS.GREEN });
    } else if (this.props.color === "red") {
      this.setState({ currentColor: COLORS.RED });
    } else if (this.props.color === "dark") {
      this.setState({ currentColor: COLORS.DARK });
    } else {
      this.setState({ currentColor: COLORS.LIGHT });
    }
  }

  render() {
    return (
      <View
        style={[styles.container, { backgroundColor: this.state.currentColor }]}
      >
        <BlurView tint="default" intensity={50}>
          <View style={styles.children}>{this.props.children}</View>
        </BlurView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    margin: 4,
    color: "white",
    alignSelf: "center",
    alignItems: "stretch",
    textAlign: "center",
    borderColor: "rgba(255,255,255,0.3)",
    borderWidth: 1,
    //borderLeftWidth: 0,
   // borderTopWidth: 0,
    //borderLeftColor: "#c8c8c8",
    justifyContent: "space-around",

    width: "95%",

    shadowColor: "#000000",
    shadowOffset: {
      width: 3,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    backgroundColor: "#000000",
    elevation: 5,
  },

  children: {
    margin: 5,
    color: "white",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-around",



  },
});
