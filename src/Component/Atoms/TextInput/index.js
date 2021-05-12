import React from 'react';
import {StyleSheet, TextInput as TextInputRN, View} from 'react-native';

const TextInput = ({children, ...props}) => {
  return (
      <View style={styles.wrapper}>
        <TextInputRN style={styles.input} {...props} />
      </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 312,
    height: 37,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C5C5C5',
    backgroundColor: 'white',
    fontSize: 12,
    paddingHorizontal: 10,
  },
});

export default TextInput;
