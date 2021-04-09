import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

interface IProps {
  selected: string;
}

interface IState {
  selected: string;
}

export default class GlassSheet extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      selected: this.props.selected,
    };
  }

  componentDidMount() {}

  render() {
    return <View></View>;
  }
}

const styles = StyleSheet.create({
  container: {},
  menuItem: {},
  icon: {},
  text: {},
});
