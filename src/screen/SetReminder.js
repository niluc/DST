import React, {useState} from 'react';
import {
  StyleSheet,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
} from 'react-native';
import TextField from '../TextField';
import {icons, FONTS, SIZES, COLORS} from '../constants';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';

const SetReminder = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [contributeType, setContributeType] = useState('');
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

  const downImage = (
    <Image
      source={icons.down_arrow}
      style={{
        marginRight: 10,
        width: 12,
        height: 8,
        tintColor: 'black',
      }}
    />
  );
  const calendar = (
    <TouchableOpacity onPress={showDatepicker}>
      <Image
        source={icons.calendar2}
        style={{
          marginRight: 10,
          width: 20,
          height: 20,
          tintColor: 'black',
        }}
      />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.safe}>
      <TextField
        title={'Select Bill'}
        onChange={setTitle}
        placeholder="Select Bill"
      />
      <TextField
        title={'Amount'}
        onChange={setAmount}
        placeholder="Amount"
        afterText={'$'}
      />
      <View style={{marginBottom: 20}}>
        <Text style={{...styles.texttitle, marginBottom: 20}}>Frequency</Text>
        <Picker
          mode={'dropdown'}
          selectedValue={contributeType}
          onValueChange={(itemValue, itemIndex) => setContributeType(itemValue)}
          style={{
            ...styles.shadow,
            padding: 10,
            backgroundColor: 'white',
          }}>
          <Picker.Item label="Once a day" value="daily" />
          <Picker.Item label="Once a month" value="monthly" />
          <Picker.Item label="Once a year" value="yearly" />
        </Picker>
      </View>
      <TextField
        title={'Date'}
        placeholder={'Date'}
        afterImage={calendar}
        value={date.toDateString()}
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
      <TouchableOpacity
        style={{
          ...styles.loginBtn,
          alignSelf: 'center',
          marginTop: 50,
          ...styles.shadow,
        }}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Add Reminder
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SetReminder;

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: 20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  loginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '69.5%',
    backgroundColor: '#3B3DBF',
    borderRadius: 15,
    height: 50,
    width: '60%',
  },
  texttitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});
