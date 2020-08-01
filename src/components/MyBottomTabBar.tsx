import React, { useState } from "react";
import { Platform, Keyboard } from "react-native";
import { BottomTabBar, BottomTabBarProps } from "react-navigation-tabs"; // need version 2.0 react-navigation of course... it comes preinstalled as a dependency of react-navigation.
interface State {
  visible: boolean;
}
/**
 * FIXME:androidのキーボードの出現に合わせて下タブを隠すようにしたい
 */
class MyBottomTabBar extends React.Component<BottomTabBarProps, State> {
  constructor(props: any) {
    super(props);
    this.state = { visible: true };
  }
  componentDidMount() {
    if (Platform.OS === "android") {
      Keyboard.addListener("keyboardDidShow", () => {
        this.setState({ visible: false });
      });
      Keyboard.addListener("keyboardDidHide", () => {
        this.setState({ visible: true });
      });
    }
  }
  // componentWillUnmount() {
  //   this.keyboardEventListeners &&
  //     this.keyboardEventListeners.forEach((eventListener) =>
  //       eventListener.remove()
  //     );
  // }

  render() {
    if (!this.state.visible) {
      return null;
    } else {
      return <BottomTabBar {...this.props} />;
    }
  }
}

export default MyBottomTabBar;
