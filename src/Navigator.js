import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, View, TouchableOpacity } from "react-native";

import {
    Home,
    Saving,
    AddGoal,
    Entries,
    TotalExpenses,
    Add,
    AddIncome,
    AddExpense,
    Reminder,
    SetReminder,
    Setting
} from './screen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Bottom Tab

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
    <Tab.Navigator 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 98,
          backgroundColor: '#F0F1F5'
        },
        headerShown: false
      }}
    >   
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
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
      <Tab.Screen
        name="TotalExpensesStack"
        component={TotalExpensesStack}
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
      <Tab.Screen
        name="AddStack"
        component={AddStack}
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
      <Tab.Screen
        name="ReminderStack"
        component={ReminderStack}
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
      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
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
    </Tab.Navigator>
  );
}

const HomeStack = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = ["Saving","AddGoal","Entries"];
    if(tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))){
        navigation.setOptions({
          tabBarStyle: {display: 'none'}
          });
    }
    else {
        navigation.setOptions({
          tabBarStyle: {
            height: 98,
            backgroundColor: '#F0F1F5'
          }
        });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 120,
          backgroundColor: '#F2F2F2'
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25
        }
      }}
    >
      <Stack.Screen
        name="Overview"
        component={Home}
      />
      <Stack.Screen
        name="Saving"
        component={Saving}
      />
      <Stack.Screen
        name="AddGoal"
        component={AddGoal}
      />
      <Stack.Screen
        name="Entries"
        component={Entries}
      />
    </Stack.Navigator>
  )
}

const TotalExpensesStack = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        height: 98,
        backgroundColor: '#F0F1F5'
      }
    });
    }, [navigation]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 120,
          backgroundColor: '#F2F2F2'
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25
        }
      }}
    >
      <Stack.Screen
        name="TotalExpenses"
        component={TotalExpenses}
      />
    </Stack.Navigator>
  )
}

const AddStack = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = ["AddIncome","AddExpense"];
    if(tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))){
        navigation.setOptions({
          tabBarStyle: {display: 'none'}
          });
    }
    else {
        navigation.setOptions({
          tabBarStyle: {
            height: 98,
            backgroundColor: '#F0F1F5'
          }
        });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 120,
          backgroundColor: '#F2F2F2'
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25
        }
      }}
    >
      <Stack.Screen
        name="Add"
        component={Add}
      />
      <Stack.Screen
        name="AddIncome"
        component={AddIncome}
      />
      <Stack.Screen
        name="AddExpense"
        component={AddExpense}
      />
    </Stack.Navigator>
  )
}

const ReminderStack = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = ["SetReminder"];
    if(tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))){
        navigation.setOptions({
          tabBarStyle: {display: 'none'}
          });
    }
    else {
        navigation.setOptions({
          tabBarStyle: {
            height: 98,
            backgroundColor: '#F0F1F5'
          }
        });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 120,
          backgroundColor: '#F2F2F2'
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25
        }
      }}
    >
      <Stack.Screen
        name="Reminder"
        component={Reminder}
      />
      <Stack.Screen
        name="SetReminder"
        component={SetReminder}
      />
    </Stack.Navigator>
  )
}

const SettingStack = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        height: 98,
        backgroundColor: '#F0F1F5'
      }
    });
    }, [navigation]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 120,
          backgroundColor: '#F2F2F2'
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25
        }
      }}
    >
      <Stack.Screen
        name="Setting"
        component={Setting}
      />
    </Stack.Navigator>
  )
}

export default Tabs;