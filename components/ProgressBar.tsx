import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import GlassSheet from "./GlassSheet";

interface IProps {
  amountDone: number;
  goal: number;
  color: string;
  title: string;
  time: string;
  icon: string;
}

interface IState {
  currentDone: number;
  currentGoal: number;
  currentWidth: number;
  previousWidth: number;
  iconColor: string;
}

const COLOR = "lightgray";

export default class ProgressBar extends React.Component<IProps, IState> {
  animVal = new Animated.Value(0);

  mapValue = (val: number, i1: number, i2: number, o1: number, o2: number) => {
    //  output = output_start + ((output_end - output_start) / (input_end - input_start)) * (input - input_start)
    return Math.round(o1 + ((o2 - o1) / i2 - i1)) * (val - i1);
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      currentDone: this.props.amountDone,
      currentGoal: this.props.goal,
      currentWidth: (this.props.amountDone / this.props.goal) * 100,
      previousWidth: (this.props.amountDone / this.props.goal) * 100,
      iconColor: "#EEAAAC",
    };
  }

  interpolateBar = this.animVal.interpolate({
    inputRange: [0, 1],
    outputRange: ["100%", "90%"],
  });

  animatedTransition = Animated.spring(this.animVal, {
    useNativeDriver: true,
    toValue: 1,
  });

  incrementer = () => {
    this.setState({
      currentDone: this.state.currentDone + 1,
      previousWidth: this.state.currentWidth,
      currentWidth:
        (this.state.currentDone / this.state.currentGoal) * 100 > 100
          ? 100
          : (this.state.currentDone / this.state.currentGoal) * 100,
    });

    /** 
    let r1 = parseInt(this.state.currentWidth.toString().slice(1, -4))
    let b1 = parseInt(this.state.currentWidth.toString().slice(3,-2))
    let g1 = parseInt(this.state.currentWidth.toString().slice(-2))

    console.log(r1.toString() + b1.toString() + g1.toString())

    let r2 = this.mapValue(r1, 0, 100, 41, 150).toString() + ", ";
    let b2 = this.mapValue(b1, 0, 100, 135, 192).toString() + ", ";
    let g2 = this.mapValue(g1, 0, 100, 212, 112).toString() +")";

    var iconHex = "rgb("+r2+b2+g2

    this.setState({iconColor: iconHex});

    console.log("r1= " + r2)
    console.log(iconHex)

    */
  };

  decrementer = () => {
    if (this.state.currentDone > 0) {
      this.setState({
        currentDone: this.state.currentDone - 1,
        previousWidth: this.state.currentWidth,
        currentWidth:
          (this.state.currentDone / this.state.currentGoal) * 100 > 100
            ? 100
            : (this.state.currentDone / this.state.currentGoal) * 100,
      });
    }
  };

  componentDidUpdate() {}

  render() {
    return (
      <View style={styles.wrapperVertical}>
        <GlassSheet color="dark">
          <View style={styles.iconWrapper}>
          <Icon
            name={this.props.icon}
            type="font-awesome"
            color={this.state.iconColor} //"#95C070"
            size={40}
            style={{ 
            }}
          />
          </View>

          <View style={styles.wrapperHorizontal}>
            <TouchableOpacity
              style={[styles.button, styles.buttonRight]}
              onPress={this.decrementer}
            >
              <Text style={{ color: "white" }}>-</Text>
            </TouchableOpacity>

            <View style={styles.outerContainer}>
              <View
                style={[
                  styles.innerContainer,
                  {
                    width:
                      (this.state.currentDone / this.state.currentGoal) * 100 >
                      100
                        ? 100 + "%"
                        : (this.state.currentDone / this.state.currentGoal) *
                            100 +
                          "%",
                    backgroundColor: this.props.color,
                  },
                ]}
              />
              <LinearGradient
                style={[
                  styles.innerContainer,
                  {
                    width:
                      (this.state.currentDone / this.state.currentGoal) * 100 >
                      100
                        ? 100 + "%"
                        : (this.state.currentDone / this.state.currentGoal) *
                            100 +
                          "%",
                  },
                ]}
                colors={["#7794B4", "#7CA9B7", "#CE9A9C"]}
                start={{ x: 0.5, y: 1 }}
                end={{ x: 0.0, y: 0.25 }}
                locations={[0.2, 0.5, 0.8]}
              />

              <Text style={styles.text}>
                {this.props.title} {this.state.currentDone}/
                {this.state.currentGoal}
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonRight]}
              onPress={this.incrementer}
            >
              <Text style={{ color: "white" }}>+</Text>
            </TouchableOpacity>
          </View>
          <GlassSheet color="light">
            <Text style={styles.description}>
              {" "}
              "{this.props.title}" is a {this.props.time} goal you want to
              complete {this.props.goal} times.{" "}
            </Text>
          </GlassSheet>
        </GlassSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperVertical: {
    borderStyle: "solid",
    // borderWidth: 1,
    padding: 5,
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperHorizontal: {
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    display: "flex",
  },
  iconWrapper: {
    position: "relative",
    height: 30
  },
  outerContainer: {
    height: 30,
    position: "relative",
    width: "80%",
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: COLOR,
    borderRadius: 10,
    justifyContent: "center",
    shadowColor: "#000",
    marginBottom: 15,

    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  innerContainer: {
    position: "absolute",
    // borderRadius: 3,
    borderBottomLeftRadius: 10,
    borderRadius: 10,
    height: "100%",
    justifyContent: "center",
    left: 0,
    zIndex: -1,
    opacity: 1,
  },
  text: {
    textAlign: "center",
    color: "#FDE6F6",
    
  },
  description: {
    margin: 5,
    color: "#224554",
    backgroundColor: "transparent",
    fontStyle: "italic",
  },
  button: {
    borderRadius: 1000,
    height: 20,
    width: 20,
    marginTop: 0,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#224554",
    borderWidth: 1,
    borderColor: "#224554",
  },
  buttonLeft: {
    left: 0,
  },
  buttonRight: {
    right: 0,
  },
});

/*
 {this.props.title} at
              {isNaN((this.state.currentDone / this.state.currentGoal) * 100)
                ? " " + 0
                : " " +
                  Math.round(
                    (this.state.currentDone / this.state.currentGoal) * 100
                  )}{" "}
              %
              */
