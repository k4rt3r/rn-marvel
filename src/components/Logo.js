import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <Image
      resizeMode="contain"
      style={styles.image}
      source={require("../images/logo.png")}
    />
  );
};

const styles = StyleSheet.create({
  image: { backgroundColor: "#e71a24", height: 55 },
});

export default Logo;
