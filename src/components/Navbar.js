import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function Navbar() {
  const [selected, setSelected] = useState({
    home: true,
    orders: false,
    help: false,
    inbox: false,
    account: false,
  });

  const handleSelected = (target) => {
    let newSelected = {...selected};
    for (const nav in newSelected) {
      newSelected[nav] = false;
    }
    newSelected[target] = true;
    setSelected(newSelected);
  };

  return (
    <View style={styles.Navbar}>
      <TouchableOpacity
        onPress={() => handleSelected('home')}
        style={styles.NavbarItem}>
        <View style={styles.NavbarIcon}>
          <Icon
            name="home"
            size={30}
            color={selected.home ? 'green' : 'grey'}
          />
        </View>
        <Text
          style={[
            styles.NavbarText,
            {color: selected.home ? 'green' : 'grey'},
          ]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSelected('orders')}
        style={styles.NavbarItem}>
        <View style={styles.NavbarIcon}>
          <Icon
            name="clipboard"
            size={30}
            color={selected.orders ? 'green' : 'grey'}
          />
        </View>
        <Text
          style={[
            styles.NavbarText,
            {color: selected.orders ? 'green' : 'grey'},
          ]}>
          Orders
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSelected('help')}
        style={styles.NavbarItem}>
        <View style={styles.NavbarIcon}>
          <Icon
            name="help-with-circle"
            size={30}
            color={selected.help ? 'green' : 'grey'}
          />
        </View>
        <Text
          style={[
            styles.NavbarText,
            {color: selected.help ? 'green' : 'grey'},
          ]}>
          Help
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSelected('inbox')}
        style={styles.NavbarItem}>
        <View style={styles.NavbarIcon}>
          <Icon
            name="mail"
            size={30}
            color={selected.inbox ? 'green' : 'grey'}
          />
        </View>
        <Text
          style={[
            styles.NavbarText,
            {color: selected.inbox ? 'green' : 'grey'},
          ]}>
          Inbox
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSelected('account')}
        style={styles.NavbarItem}>
        <View style={styles.NavbarIcon}>
          <Icon
            name="user"
            size={30}
            color={selected.account ? 'green' : 'grey'}
          />
        </View>
        <Text
          style={[
            styles.NavbarText,
            {color: selected.account ? 'green' : 'grey'},
          ]}>
          Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Navbar: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: 'grey',
  },
  NavbarItem: {
    // flex: 1,
    // backgroundColor: 'orange',
    width: 60,
    paddingVertical: 5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  NavbarIcon: {
    // backgroundColor: 'yellow',
    // width: 36,
    // height: 36,
  },
  NavbarText: {
    // color: 'grey',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
