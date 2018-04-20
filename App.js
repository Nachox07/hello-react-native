import React from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RNShakeEvent from 'react-native-shake-event';
import ListItem from './components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 80,
  },
  listContainer: {
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 22,
  },
});

const items = [
  {
    text: 'Orange',
  },
  {
    text: 'Apple',
  },
  {
    text: 'Pear',
  },
];
export default class App extends React.Component {
  componentWillMount() {
    RNShakeEvent.addEventListener('shake', () => {
      console.log('It is sunny!');
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <StatusBar
              backgroundColor="grey"
              barStyle="light-content"
          />
          <View style={styles.listContainer}>
              <FlatList
                  data={ items }
                  renderItem={
                      ({ item }) => <ListItem data={item} />
                  }
              />
          </View>
      </View>
    );
  }
}
