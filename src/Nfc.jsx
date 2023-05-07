import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

const BouncingView = ({ onPress }) => {
  const bounceAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnimation, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnimation, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={{
          transform: [
            {
              translateY: bounceAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -20],
              }),
            },
          ],
        }}
      >
        <View style={{}}>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 200, height: 200, borderRadius: 50 }}
          />
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const Nfc = ({ navigation }) => {
  const handlePress = () => {
    setTimeout(() => {
      navigation.navigate("AddPage");
    }, 1000);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {/* <Image
        source={require("../assets/logo.png")}
        style={{ width: 200, height: 200, borderRadius: 50 }}
      /> */}
      <BouncingView onPress={handlePress} />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default Nfc;
// import React from "react";
// import { TouchableNativeFeedback, View, Text } from "react-native";

// const MyButton = () => {
//   const handlePress = () => {
//     console.log("Button pressed");
//   };

//   return (
//     <TouchableNativeFeedback onPress={handlePress}>
//       <View
//         style={{
//           padding: 16,
//           backgroundColor: "blue",
//           borderRadius: 4,
//           flex: 1,
//           justifyContent: "center",
//         }}
//       >
//         <Text style={{ color: "white", fontSize: 20 }}>Press me</Text>
//       </View>
//     </TouchableNativeFeedback>
//   );
// };

// export default MyButton;
