import { StyleSheet, View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";

const LoginScreen = ({ navigation }) => {
  const [username] = useState("");

  filterList =(list)=> {
    if(this.state.username){
      return list.filter(listItem => listItem.toLowerCase().includes(this.state.search.toLowerCase()))
    }else{
      return null;
    }
  }

  onLoginButtonClicked = () => {
    var credentials = [
      "Professor x",
      "xavier",
      "Charles Xavier",
      "Profesor x",
      "Cyclops",
      "cyclope",
      "Iceman",
      "hombre de hielo",
      "angel",
      "archangel",
      "bestia",
      "beast",
      "phoenix",
      "fenix",
      "wolverine",
      "lobezno",
      "storm",
      "tormenta",
      "banshee",
      "sunfire",
      "Colossus",
      "coloso",
      "thunderbird",
      "logan",
      "nightcrawler",
      "vulcan",
      "Darwin",
      "Sway",
      "petra",
      "Rogue",
      "picara",
      "Ariel",
      "Sprite",
      "ShadowCat",
      "Fénix",
      "mimic",
      "havok",
      "gambit",
      "gambito",
    ];

    if (filterList(credentials)) {
      () => navigation.navigate("Main");
    } else {
      console.log("mismatch");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.insideView}>
        <Text style={styles.text}>Name</Text>
        <TextInput
          onChangeText={() => this.setState({ writtenName: this.state.username })}
          blurOnSubmit={true}
          style={styles.nameInput}
        >
          {this.state.writtenName}
        </TextInput>
      </View>
      <Button
        title="Login"
        style={styles.button}
        onPress={onLoginButtonClicked}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  insideView: {
    margin: 30,
    alignItems: "center",
  },
  nameInput: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 15,
    width: 100,
    color: "red",
    paddingHorizontal: 10,
  },
  text: {
    color: "red",
  },
});

export default LoginScreen;
