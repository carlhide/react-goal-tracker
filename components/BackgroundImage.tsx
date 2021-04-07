import React from "react";
import {
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
  View,
} from "react-native";

interface IProps {
  imgPath: ImageBackgroundProps;
}

interface IState {
  rendered: boolean;
}

export default class BackgroundImage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      rendered: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={this.props.imgPath}
          style={styles.image}
          blurRadius={0}
        >
          <View style={styles.blacken} />
          {this.props.children}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  linearGradient: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  blacken: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
});
