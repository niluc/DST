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
import {icons} from '../constants';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddGoal = () => {
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
        title={'Goal Title'}
        onChange={setTitle}
        placeholder="Goal title"
      />
      <TextField
        title={'Amount'}
        onChange={setAmount}
        placeholder="Amount"
        afterText={'$'}
      />
      <TextField
        title={'Contribution Type'}
        onChange={setContributeType}
        placeholder="Contribution Type"
      />
      <TextField
        title={'Deadline'}
        placeholder={'Deadline'}
        afterImage={calendar}
        value={date.toDateString()}
        editable={'false'}
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
          Add goal
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddGoal;


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
});
