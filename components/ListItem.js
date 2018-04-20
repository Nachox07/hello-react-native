import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 22,
  },
});

export default class ListItem extends React.Component {
  render() {
    return (
            <Text style={styles.text}>{
                this.props.data.text
            }</Text>
    );
  }
}
