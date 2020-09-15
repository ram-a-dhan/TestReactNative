import React, { useRef } from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import Hello from '../Hello';
import SearchBar from './SearchBar';
import Gopay from './Gopay';
import Services from './Services';

export default function Home() {
  const ref = useRef(null);
  
  useScrollToTop(ref);

  return (
    <>
      <SearchBar />
      <ScrollView
        contentContainerStyle={styles.Home}
        ref={ref}
      >
        <Gopay />
        <Services />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  Home: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});