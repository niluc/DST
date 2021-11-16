import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, View, TouchableOpacity } from "react-native";

import Home from './screen/Home.js';
import TotalExpense from './screen/TotalExpense.js';
import Add from './screen/Add.js';
import Reminder from './screen/Reminder.js';
import Setting from './screen/Setting.js';

const { Navigator, Screen } = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top:-10,
      justifyContent: 'center',
      alignItems: 'center'
    }}
    onPress={onPress}
  >
    <View style={{
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#3B3DBF'
    }}>
      {children}
    </View>
  </TouchableOpacity>
)

const Tabs = () => {
  return(
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 98,
          backgroundColor: '#F0F1F5'
        },
      }}
    >   
      <Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/icons/home.png')}
                resizeMode='contain'
                style={{
                  top: -10,
                  width: 40,
                  height: 40,
                  tintColor: focused ? '#121328' : '#C4C4C4'
                }}
              />
            </View>
          )
        }}
      />
      <Screen
        name="TotalExpense"
        component={TotalExpense}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/icons/chart.png')}
                resizeMode='contain'
                style={{
                  top: -10,
                  width: 40,
                  height: 40,
                  tintColor: focused ? '#121328' : '#C4C4C4'
                }}
              />
            </View>
          )
        }}
      />
      <Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/plus.png')}
              resizeMode='contain'
              style={{
                width: 40,
                height: 40,
                tintColor: '#C4C4C4'
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
      />
      <Screen
        name="Reminder"
        component={Reminder}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/icons/calendar.png')}
                resizeMode='contain'
                style={{
                  top: -10,
                  width: 40,
                  height: 40,
                  tintColor: focused ? '#121328' : '#C4C4C4'
                }}
              />
            </View>
          )
        }}
      />
      <Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/icons/settings.png')}
                resizeMode='contain'
                style={{
                  top: -10,
                  width: 40,
                  height: 40,
                  tintColor: focused ? '#121328' : '#C4C4C4'
                }}
              />
            </View>
          )
        }}
      />
    </Navigator>
  );
}

export default Tabs;