import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({title, ...props}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 312,
    borderRadius: 20,
    backgroundColor: '#C238CE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
