import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./src/Add";
import Display from "./src/display";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Nfc from "./src/Nfc";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Nfc"
            component={Nfc}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AddPage"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DisplayPage"
            component={Display}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
