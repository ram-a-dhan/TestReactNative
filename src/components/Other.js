import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import Hello from './Hello';

export default function Other() {
  return (
    <ScrollView contentContainerStyle={styles.Home}>
      <Hello />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Home: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});