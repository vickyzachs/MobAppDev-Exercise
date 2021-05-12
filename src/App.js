import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import ListStudent from './Component/Molecules/ListStudent';
import Register from './Pages/Register';

const App = () => {
  return (
    <View>
      {/* <Register /> */}
      <ListStudent />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({})
