import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Services() {
  return (
    <View style={styles.Services}>
      <TouchableOpacity style={styles.Service}>
        <View style={styles.ServiceBox}>
          <FontistoIcons name="motorcycle" size={40} color="orange" />
        </View>
        <Text style={styles.ServiceTitle}>
          Go-Ride
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Service}>
        <View style={styles.ServiceBox}>
          <FontistoIcons name="car" size={40} color="green" />
        </View>
        <Text style={styles.ServiceTitle}>
          Go-Car
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Service}>
        <View style={styles.ServiceBox}>
          <MCIcons name="package" size={40} color="blue" />
        </View>
        <Text style={styles.ServiceTitle}>
          Go-Send
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Service}>
        <View style={styles.ServiceBox}>
          <MCIcons name="silverware-fork-knife" size={40} color="red" />
        </View>
        <Text style={styles.ServiceTitle}>
          Go-Food
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.Service}>
        <View style={styles.ServiceBox}>
          <FontistoIcons name="motorcycle" size={40} color="orange" />
        </View>
        <Text style={styles.ServiceTitle}>
          Go-Ride
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Service}>
        <View style={styles.ServiceBox}>
          <FontistoIcons name="car" size={40} color="green" />
        </View>
        <Text style={styles.ServiceTitle}>
          Go-Car
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Service}>
        <View style={styles.ServiceBox}>
          <MCIcons name="package" size={40} color="blue" />
        </View>
        <Text style={styles.ServiceTitle}>
          Go-Send
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Service}>
        <View style={styles.ServiceBox}>
          <MCIcons name="silverware-fork-knife" size={40} color="red" />
        </View>
        <Text style={styles.ServiceTitle}>
          Go-Food
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  Services: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  Service: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 20,
  },
  ServiceBox: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 15,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ServiceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});