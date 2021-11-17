import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import Reminders from '../Reminder';

const Reminder = ({navigation}) => {
  let reminderList = [
    {
      id: 1,
      type: 'Water Bill',
      date: '10/08/2021',
      value: 20,
    },
    {
      id: 2,
      type: 'Car loan',
      date: '1/08/2021',
      value: 200,
    },
    {
      id: 3,
      type: 'Iphone 13 Pro loan',
      date: '28/07/2021',
      value: 100,
    },
  ];
  const [reminders, setReminders] = React.useState(reminderList);
  return (
    <SafeAreaView style={styles.safe}>
      <Reminders data={reminders} navigation={navigation} />
      {/*
        <Button
          title="SetReminder"
          onPress={() => navigation.navigate('SetReminder')}
        />
        */}
    </SafeAreaView>
  );
};

export default Reminder;

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 25,
  },
});
