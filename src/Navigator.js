import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import {Image, View, TouchableOpacity, Button} from 'react-native';
import {COLORS, icons} from './constants';

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
  Setting,
  Account,
  SignIn,
  SignUp,
  ForgotPassword,
  ResetPassword,
} from './screen';

const isSignIn = 0;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Bottom Tab

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -10,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: COLORS.support1,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 98,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  top: -10,
                  width: 40,
                  height: 40,
                  tintColor: focused ? '#121328' : '#C4C4C4',
                }}
              />
            </View>
          ),
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
                resizeMode="contain"
                style={{
                  top: -10,
                  width: 40,
                  height: 40,
                  tintColor: focused ? '#121328' : '#C4C4C4',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddStack"
        component={AddStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/plus.png')}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                tintColor: '#C4C4C4',
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
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
                resizeMode="contain"
                style={{
                  top: -10,
                  width: 40,
                  height: 40,
                  tintColor: focused ? '#121328' : '#C4C4C4',
                }}
              />
            </View>
          ),
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
                resizeMode="contain"
                style={{
                  top: -10,
                  width: 40,
                  height: 40,
                  tintColor: focused ? '#121328' : '#C4C4C4',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AccountStack = [
  'Account',
  'SignIn',
  'SignUp',
  'ForgotPassword',
  'ResetPassword',
];

const HomeStack = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = ['Saving', 'Entries', 'AddGoal', ...AccountStack];
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({
        tabBarStyle: {display: 'none'},
      });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          height: 98,
          backgroundColor: COLORS.background1,
        },
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 120,
          backgroundColor: COLORS.white,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25,
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('HomeStack', {
                screen: isSignIn == 0 ? 'Account' : 'SignIn',
              })
            }
            style={{
              width: 45,
              height: 45,
              right: 30,
              backgroundColor: COLORS.primary,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.user}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.primary20,
              }}
            />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="Overview" component={Home} />
      <Stack.Screen
        name="Saving"
        component={Saving}
        options={{
          ...headerStyle,
        }}
      />
      <Stack.Screen
        name="AddGoal"
        component={AddGoal}
        options={{
          ...headerStyle,
        }}
      />
      <Stack.Screen
        name="Entries"
        component={Entries}
        options={{
          ...headerStyle,
        }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
    </Stack.Navigator>
  );
};

const TotalExpensesStack = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = [...AccountStack];
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({
        tabBarStyle: {display: 'none'},
      });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          height: 98,
          backgroundColor: COLORS.background1,
        },
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 120,
          backgroundColor: COLORS.white,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25,
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('TotalExpensesStack', {
                screen: isSignIn == 0 ? 'Account' : 'SignIn',
              })
            }
            style={{
              width: 45,
              height: 45,
              right: 30,
              backgroundColor: COLORS.primary,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.user}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.primary20,
              }}
            />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="TotalExpenses" component={TotalExpenses} />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
    </Stack.Navigator>
  );
};

const AddStack = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = [
      'AddIncome',
      'AddExpense',
      'Entries',
      ...AccountStack,
    ];
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({
        tabBarStyle: {display: 'none'},
      });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          height: 98,
          backgroundColor: COLORS.background1,
        },
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 120,
          backgroundColor: COLORS.white,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25,
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AddStack', {
                screen: isSignIn == 0 ? 'Account' : 'SignIn',
              })
            }
            style={{
              width: 45,
              height: 45,
              right: 30,
              backgroundColor: COLORS.primary,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.user}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.primary20,
              }}
            />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen
        name="AddIncome"
        component={AddIncome}
        options={{
          ...headerStyle,
        }}
      />
      <Stack.Screen
        name="AddExpense"
        component={AddExpense}
        options={{
          ...headerStyle,
        }}
      />
      <Stack.Screen
        name="Entries"
        component={Entries}
        options={{
          ...headerStyle,
        }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
    </Stack.Navigator>
  );
};

const ReminderStack = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = ['SetReminder', ...AccountStack];
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({
        tabBarStyle: {display: 'none'},
      });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          height: 98,
          backgroundColor: COLORS.background1,
        },
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 120,
          backgroundColor: COLORS.white,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25,
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ReminderStack', {
                screen: isSignIn == 0 ? 'Account' : 'SignIn',
              })
            }
            style={{
              width: 45,
              height: 45,
              right: 30,
              backgroundColor: COLORS.primary,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.user}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.primary20,
              }}
            />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="Reminder" component={Reminder} />
      <Stack.Screen
        name="SetReminder"
        component={SetReminder}
        options={{
          ...headerStyle,
        }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
    </Stack.Navigator>
  );
};

const SettingStack = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = [...AccountStack];
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({
        tabBarStyle: {display: 'none'},
      });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          height: 98,
          backgroundColor: COLORS.background1,
        },
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 120,
          backgroundColor: COLORS.white,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25,
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SettingStack', {
                screen: isSignIn == 0 ? 'Account' : 'SignIn',
              })
            }
            style={{
              width: 45,
              height: 45,
              right: 30,
              backgroundColor: COLORS.primary,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.user}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.primary20,
              }}
            />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          ...headerStyle,
          headerRight: () => [],
        }}
      />
    </Stack.Navigator>
  );
};

const headerStyle = {
  headerStyle: {
    height: 120,
    backgroundColor: COLORS.background1,
  },
};

export default Tabs;
