import React from "react";
import { Button } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import palet from "../../common/palet.json";

interface Props {
  // text?: string;
  onPress: any;
}

interface State {}

export const CircleButton = (props: Props) => {
  return (
    <View style={styles.container}>
      <Button
        buttonStyle={styles.circleButton}
        onPress={props.onPress}
        icon={
          <Icon
            name={"plus"}
            color={palet.text}
            size={20}
            type={"font-awesome-5"}
            iconStyle={styles.iconstyle}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 48,
    height: 48,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: palet.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor: palet.sub,
  },
  iconstyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CircleButton;
