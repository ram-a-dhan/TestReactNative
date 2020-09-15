import React from 'react';
import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.App}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Routes />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  App: {
    backgroundColor: 'red',
    flex: 1,
  },
});