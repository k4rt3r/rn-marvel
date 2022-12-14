import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  ActivityIndicator,
  Text,
  StyleSheet,
} from "react-native";
import char from "./3dman.json";
import IconButton from "../components/IconButton.js";
import api from "../services/api.js";

const Detail = ({ navigation }) => {
  const [character, setCharacter] = useState(char);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = navigation.getParam("id");
    async function loadCharacter() {
      const response = await api.get(`/characters/${id}`);
      const [char] = response.data.data.results;
      setCharacter(char);
      setLoading(false);
    }

    loadCharacter();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="red" />
      </View>
    );
  }

  const [detail, wiki, comics] = character.urls;

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        }}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={{ alignItems: "center" }}>
          <View style={styles.secondContainer}>
            <Text style={styles.text}>{character.name}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <IconButton
              icon="contacts"
              onPress={() =>
                navigation.navigate("WebPage", { link: detail.url })
              }
            >
              Perfil
            </IconButton>
            <IconButton
              icon="barschart"
              style={{ marginHorizontal: 20 }}
              onPress={() => navigation.navigate("WebPage", { link: wiki.url })}
            >
              Wiki
            </IconButton>
            <IconButton
              icon="book"
              onPress={() =>
                navigation.navigate("WebPage", { link: comics.url })
              }
            >
              Comics
            </IconButton>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  imageBackground: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: 25,
  },
  secondContainer: {
    backgroundColor: "#fff",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  text: { fontSize: 18, fontWeight: "bold" },
  loading: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default Detail;
