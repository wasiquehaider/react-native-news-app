import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";

import { Scene, Router, Stack } from "react-native-router-flux";

import Home from "../modules/home/scenes/Home";
import Article from "../modules/home/scenes/Article";
import Source from "../modules/home/scenes/Source";

import { color, navTitleStyle } from "../styles/theme";

export default class extends React.Component {
  state = {
    isReady: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isReady: true }), 1000);
  }

  render() {
    let navTitleStyle = {
      fontSize: 15,
      fontFamily: "HelveticaNeue-Medium",
      color: "#1E1611",
      letterSpacing: 0.4
    };

    if (!this.state.isReady)
      return (
        <ActivityIndicator
          style={styles.container}
          size="large"
          color="green"
        />
      );

    return (
      <Router>
        <Stack
          key="root"
          navigationBarStyle={{ backgroundColor: "#fff" }}
          titleStyle={navTitleStyle}
          backButtonTintColor={color.black}
        >
          <Scene key="Home" component={Home} title="Top Headlines" initial />
          <Scene key="Article" component={Article} title="" />
          <Scene key="Source" component={Source} title="" />
        </Stack>
      </Router>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
