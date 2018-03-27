import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="grey"
          barStyle="light-content"
        />
        <Text style={styles.text}>Hello React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 22
  }
});
