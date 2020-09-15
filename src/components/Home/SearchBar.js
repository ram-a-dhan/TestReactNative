import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ADIcons from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
  return (
    <View style={styles.SearchBar}>
      <View style={styles.SearchBorder}>
        <ADIcons name="search1" size={25} color="black" />
        <TextInput
          style={styles.SearchInput}
          placeholder="What do you need?"
        />
      </View>
      <TouchableOpacity style={styles.PromoIcon}>
        <MCIcons name="brightness-percent" size={40} color="orange" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  SearchBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
  },
  SearchBorder: {
    flex: 6,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    paddingHorizontal: 10,
    marginRight: 10,
    // width: '88%',
  },
  SearchInput: {
    width: '88%',
    height: 48,
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 0
  },
  PromoIcon: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue'
  },
});