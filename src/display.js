import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Display({ navigation }) {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const data = await AsyncStorage.getItem("formData");
        if (data) {
          setFormDataList((prev) => [...prev, JSON.parse(data)]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    retrieveData();
  }, []);

  const renderCard = ({ item }) => {
    return (
      <View>
        <View style={styles.card}>
          <Text
            style={{ fontSize: 20 }}
          >{` ${item.firstName} ${item.lastName}`}</Text>
          <Text>{` Last Modified : ${item.date}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground
      source={require("../assets/history.avif")}
      style={styles.container}
    >
      <Image
        source={require("../assets/logo.png")}
        style={{ height: 100, width: 100, marginBottom: 30 }}
      />
      <FlatList
        data={formDataList}
        renderItem={renderCard}
        keyExtractor={(item) => `${item.firstName}-${item.lastName}`}
        contentContainerStyle={styles.cardList}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardList: {
    padding: 10,
  },
  card: {
    backgroundColor: "#F6E0E0",
    height: 70,
    width: 375,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flex: 1,
    justifyContent: "flex-start",
    elevation: 2,
  },
});
export default Display;
