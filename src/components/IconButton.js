import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

const IconButton = ({ children, style, icon = '', ...rest }) => {
  return (
    <RectButton
      style={[
        styles.rectButton,
        style,
      ]}
      {...rest}
    >
      <Icon name={icon} color="#e71a24" size={24} />
      <Text style={styles.text}>{children}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  rectButton: {
    borderRadius: 6,
    borderColor:'#e71a24ff',
    borderWidth:1,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text:{ color: '#e71a24ff', marginTop: 5 }
});

export default IconButton;