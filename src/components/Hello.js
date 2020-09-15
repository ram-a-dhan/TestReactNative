import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Hello() {
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>
        Hello
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: 'white',
    fontSize: 30,
  },
});