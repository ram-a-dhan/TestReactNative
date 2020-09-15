import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FA5Icons from 'react-native-vector-icons/FontAwesome5';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Gopay() {
  return (
    <View style={styles.Gopay}>
      
      <View style={styles.PayHeader}>
        <Text style={styles.PayHeaderText}>
          GO
          <EntypoIcons name="wallet" size={20} color="white" />
          PAY
        </Text>
        <Text style={styles.PayHeaderText}>
          Rp69.420
        </Text>
      </View>
      
      <View style={styles.PayContent}>
        <TouchableOpacity
          style={styles.PayContentItem}
        >
          <FA5Icons name="money-bill-wave" size={27} color="white" />
          <Text style={styles.PayContentText}>
            Pay
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.PayContentItem}
        >
          <FA5Icons name="search-location" size={33} color="white" />
          <Text style={styles.PayContentText}>
            Nearby
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.PayContentItem}
        >
          <MatIcons name="add-box" size={33} color="white" />
          <Text style={styles.PayContentText}>
            Top Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.PayContentItem}
        >
          <FontistoIcons name="nav-icon-list-a" size={27} color="white" />
          <Text style={styles.PayContentText}>
            More
          </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  Gopay: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  PayHeader: {
    width: '100%',
    backgroundColor: '#244B94',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  PayHeaderText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'NeoSans-Regular',
  },
  PayContent: {
    width: '100%',
    backgroundColor: '#285CB3',
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  PayContentItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  PayContentText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5
  },
});