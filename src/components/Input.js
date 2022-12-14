import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Input = props => {
  return (
    <View
      style={styles.mainContainer}>
      <Icon name="search1" size={18} color="#e71a24" />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Search"
        placeholderTextColor="#e71a24"
        returnKeyType="search"
        selectTextOnFocus
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginTop: 20,
  },
  input:{
    marginLeft: 10,
    height: 40,
    flex: 1,
    color: '#e71a24'
  }
});

export default Input;