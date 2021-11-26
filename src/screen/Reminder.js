import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Reminders from '../Reminder';
import {COLORS} from '../constants';
import {REMINDER_KEY, getData, clear} from '../Storage';
import PushNotification from "react-native-push-notification";

const Reminder = ({navigation}) => {
  const [reminders, setReminders] = useState([]);
  const [remindersChange, setRemindersChange] = useState(true);

  useEffect(() => {
    createChannels();
    const unsubscribe = navigation.addListener('focus', () => {
      getData(REMINDER_KEY).then(data => {
        let tempReminder = JSON.parse(data);
        setReminders(tempReminder.slice(0, 20));
        setRemindersChange(false);
        setRemindersChange(true);
      });
    });
    return unsubscribe;
  }, [navigation]);

  const createChannels = () => {
    PushNotification.createChannel({
        channelId: "reminder-channel", // (required)
        channelName: "My channel", // (required)
    },
    (created) => console.log(`CreateChannel returned '${created}'`)
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      {remindersChange && (
        <Reminders data={reminders} navigation={navigation} />
      )}
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
    backgroundColor: COLORS.white,
  },
});
