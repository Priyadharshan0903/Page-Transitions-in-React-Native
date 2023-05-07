import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useState } from "react";
// import { firebase } from "../config";
import Loading from "./loading";

const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  // const todoRef = firebase.firestore().collection("newData");
  // const [addData, setAddData] = useState("");
  // const [addEmail, setAddEmail] = useState("");
  // const [addFirstName, setAddFirstName] = useState("");
  // const [addLastName, setAddLastName] = useState("");
  // const [addGender, setAddGender] = useState("");
  // const [addMedicalHistory, setAddMedicalHistory] = useState("");
  // const [addAllergies, setAddAllergies] = useState("");

  // //add new field
  // const addField = () => {
  //   //check if we have any new field
  //   if (addData && addData.length > 0) {
  //     //get the timestamp
  //     const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  //     const data = {
  //       heading: addData,
  //       createdAt: timestamp,
  //     };
  //     todoRef
  //       .add(data)
  //       .then(() => {
  //         setAddData("");
  //         Keyboard.dismiss();
  //       })
  //       .catch((error) => {
  //         alert(error);
  //       });
  //   }
  // };
  ////////////////////////TO ADD IN LOCAL STORAGE//////////////////////////////////
  const time = new Date().toTimeString();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    medicalHistory: "",
    allergies: "",
    date: new Date().toDateString(),
    time: new Date().toTimeString(),
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.setItem("formData", JSON.stringify(formData));
      console.log(time);
      console.log("Form data saved to local storage:", formData);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        navigation.navigate("DisplayPage");
      }, 2000);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView
          contentContainerStyle={{ justifyContent: "center" }}
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              paddingBottom: 130,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                marginHorizontal: 130,
                marginTop: 80,
              }}
            >
              <Image
                source={require("../assets/logo.png")}
                style={{ width: 150, height: 150 }}
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={{ fontSize: 16, marginLeft: 14 }}>First Name :</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) =>
                  setFormData((prev) => ({ ...prev, firstName: value }))
                }
                required={true}
                value={formData.firstName}
                multiline={true}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={{ fontSize: 16, marginLeft: 14 }}>Last Name :</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) =>
                  setFormData((prev) => ({ ...prev, lastName: value }))
                }
                value={formData.lastName}
                multiline={true}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                required
              />
            </View>
            <View style={styles.formContainer}>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 14,
                  paddingLeft: 60,
                }}
              >
                Age :
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) =>
                  setFormData((prev) => ({ ...prev, age: value }))
                }
                value={formData.age}
                keyboardType="numeric"
                multiline={true}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                required
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={{ fontSize: 16, paddingLeft: 48 }}>Gender:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) =>
                  setFormData((prev) => ({ ...prev, gender: value }))
                }
                value={formData.gender}
                multiline={true}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                required
              />
            </View>
            <View style={styles.formContainer}>
              <View style={{ flexDirection: "col" }}>
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 4,
                    paddingRight: 22,
                    paddingLeft: 34,
                  }}
                >
                  Medical
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 4,
                    paddingRight: 22,
                    paddingLeft: 34,
                  }}
                >
                  History:
                </Text>
              </View>
              <TextInput
                style={{
                  height: 48,
                  width: 24,
                  overflow: "hidden",
                  backgroundColor: "#D9D9D9",
                  paddingLeft: 16,
                  flex: 1,
                  marginRight: 5,
                  borderBottomWidth: 2,
                  borderBottomColor: "white",
                  color: "black",
                }}
                onChangeText={(value) =>
                  setFormData((prev) => ({ ...prev, medicalHistory: value }))
                }
                value={formData.medicalHistory}
                multiline
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                required
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={{ fontSize: 16, marginLeft: 35, paddingRight: 12 }}>
                Allergies:
              </Text>
              <TextInput
                style={{
                  height: 48,
                  width: 24,
                  overflow: "hidden",
                  backgroundColor: "#D9D9D9",
                  paddingLeft: 16,
                  flex: 1,
                  marginRight: 5,
                  color: "black",
                }}
                onChangeText={(value) =>
                  setFormData((prev) => ({ ...prev, allergies: value }))
                }
                value={formData.allergies}
                multiline={true}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                required
              />
            </View>
            <Pressable onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>WRITE DATA</Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    gap: 30,
    height: 90,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
  },
  input: {
    height: 32,
    width: 24,
    overflow: "hidden",
    paddingLeft: 16,
    flex: 1,
    borderColor: "black",
    borderBottomWidth: 1,
    marginRight: 5,
  },
  button: {
    height: 47,
    borderRadius: 30,
    backgroundColor: "#E93323",
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 120,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default Home;
