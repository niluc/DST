import {format} from 'date-fns';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import WeekCalendar from './WeekCalendar';
import DateTimePicker from '@react-native-community/datetimepicker';
import {icons} from '../constants';

export default function Calendar(props) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.calendar}>
        <View style={{position: 'relative', padding: 10}}>
          <Text style={styles.header}>{format(date, 'MMMM yyy')}</Text>
          <TouchableOpacity onPress={showDatepicker}>
            <Image
              source={icons.calendar2}
              style={{
                width: 30,
                height: 30,
                position: 'absolute',
                top: -30,
                right: '15%',
              }}
            />
          </TouchableOpacity>
        </View>
        <WeekCalendar
          date={date}
          onChange={function (newDate) {
            setDate(newDate);
            if ('setDate' in props) {
              props.setDate(newDate);
            }
          }}
          cuscomWeek
          day={date.getDate()}
          month={date.getMonth()}
          year={date.getFullYear()}
        />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
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
    marginVertical: 20,
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
