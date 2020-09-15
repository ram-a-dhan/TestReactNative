import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Home from '../components/Home/Home';
import Other from '../components/Other';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Orders':
                iconName = 'clipboard';
                break;
              case 'Help':
                iconName = 'help-with-circle';
                break;
              case 'Inbox':
                iconName = 'mail';
                break;
              case 'Account':
                iconName = 'user';
                break;
              default:
                iconName = 'help';
                break;
            }
            return <EntypoIcons name={iconName} size={27} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: '#00AA13',
          inactiveTintColor: 'grey',
          style: {
            height: 54,
          },
          labelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: -5,
          }
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Orders" component={Other} />
        <Tab.Screen name="Help" component={Other} />
        <Tab.Screen name="Inbox" component={Other} />
        <Tab.Screen name="Account" component={Other} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
