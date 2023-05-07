import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "react-native-web-lottie";

function Start({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DisplayPage");
    }, 2000);
  }, []);
  return (
    <View style={styles.app}>
      <View style={styles.content}>
        <Text style={styles.title}>Writing Data</Text>
        <View style={styles.lottieContainer}>
          <LottieView source={require("../assets/ripple.json")} autoPlay loop />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  content: {
    alignItem: "center",
    padding: 20,
    position: "relative",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center",
    zIndex: 1,
  },
  lottieContainer: {
    backgroundColor: "#F6E0E0",
    position: "absolute",
    justifyContent: "center",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
});

export default Start;
