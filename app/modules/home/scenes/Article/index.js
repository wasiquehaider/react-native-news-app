import React from "react";
import { ActivityIndicator } from "react-native";
import WebView from "react-native-webview";

export default class Article extends React.Component {
  render() {
    let { url } = this.props.article;

    return (
      <WebView
        startInLoadingState={true}
        source={{ uri: url }}
        style={{ flex: 1 }}
        renderLoading={this.renderLoading}
      />
    );
  }

  renderLoading() {
    return (
      <ActivityIndicator
        size="large"
        color="green"
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      />
    );
  }
}
