import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={{ width: "100%", height: "100%" }}
      ></ImageBackground>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>
        Welcome to my app..{"\n"}
      </Text>
    </View>
  );
}
const image = {
  uri:
    "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDF6AB",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 35,
  },
});
