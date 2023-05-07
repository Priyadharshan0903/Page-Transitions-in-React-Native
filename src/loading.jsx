import React, { useEffect } from "react";
import { View, ActivityIndicator, Text } from "react-native";

const Loading = ({ navigation }) => {
  useEffect(() => {
    // setTimeout(() => {
    //   navigation.navigate("DisplayPage");
    // }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
      }}
    >
      <ActivityIndicator size="large" color="#E93323" />
      <Text style={{ fontSize: 20 }}>Writing data ...</Text>
    </View>
  );
};

export default Loading;
