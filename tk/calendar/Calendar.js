import {addDays} from 'date-fns';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import WeekCalendar from './WeekCalendar';

export default function Calendar() {
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.calendar}>
        <Text style={styles.header}>October 2021</Text>
        <WeekCalendar date={date} onChange={newDate => setDate(newDate)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  calendar: {
    flex: 1,
    padding: 4,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  header: {
    fontSize: 23,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#3B3DBF',
    alignSelf: 'center',
  },
});
