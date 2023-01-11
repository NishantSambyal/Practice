import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Counter Application</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    height: Platform.OS === 'ios' ? 100 : 60,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20,
    marginTop: 40,
  },
});
