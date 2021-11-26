import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import Calendar from '../Calendar';
import TextField from '../TextField';
import isOdd from 'is-odd';
import {icons, FONTS, SIZES, COLORS} from '../constants';
import {ENTRIES_KEY, getData, saveData} from '../Storage';
import {format} from 'date-fns';

const AddExpense = ({navigation}) => {
  let cateList = [
    {
      id: 0,
    },
    {
      id: 1,
      title: 'Health',
    },
    {
      id: 2,
      title: 'Grocery',
    },
    {
      id: 3,
      title: 'Toy',
    },
  ];

  const [isPress, setisPress] = React.useState(-1);
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [categories, setCategories] = useState(cateList);
  const [category, setCategory] = useState('');

  useEffect(() => {
    getData(ENTRIES_KEY).then(data => {
      setEntries(JSON.parse(data));
    });
  }, []);

  const addExpense = () => {
    if (title == '') {
      Alert.alert('Error', 'Expense Title is a required field.', [{text: 'Again'}]);
    }
    else if (amount <= 0) {
      Alert.alert('Error', 'Amount must be positive.', [{text: 'Again'}]);
    }
    else if (isPress == -1) {
      Alert.alert('Error', 'Choose one Expense Category.', [{text: 'Again'}]);
    }
    else {
      let newID = entries.length === 0 ? 1 : entries[entries.length - 1].id + 1;
      let newEntry = {
        id: newID,
        type: category,
        value: -parseFloat(amount),
        date: format(date, 'dd/MM/yyy'),
        payment: 'Cash',
      };
      navigation.navigate('Add');
      entries.push(newEntry);
      saveData(ENTRIES_KEY, entries);
      Alert.alert('Success', 'Expense was added.', [{text: 'OK'}]);
    }
  };

  const renderItem = ({item, index}) => (
    <View>
      {index == 0 && (
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            ...styles.shadow,
            margin: 15,
            padding: 15,
            paddingHorizontal: 40,
            borderRadius: 10,
          }}>
          <Image
            source={icons.plus}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      )}
      {index != 0 && (
        <TouchableOpacity
          onPress={() => {
            setisPress(item.title);
            setCategory(item.title)}}
          style={{
            width: 130,
            padding: 15,
            marginHorizontal: 20,
            marginVertical: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: (isPress != item.title) ? COLORS.primary : COLORS.secondary,
            ...styles.shadow,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* Title */}
          <Text
            style={{
              ...FONTS.h3,
              color: (isPress != item.title) ? COLORS.black : COLORS.white,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
  return (
    <SafeAreaView style={styles.safe}>
      <Calendar setDate={setDate} />
      <TextField
        title={'Expense Title'}
        onChange={setTitle}
        placeholder="Expense Title"
      />
      <TextField
        title={'Amount'}
        onChange={setAmount}
        placeholder="Amount"
        keyboardType={'decimal-pad'}
        afterText="$"
      />
      <View style={{height: 120}}>
        <Text style={{...FONTS.texttitle}}>Expense Category</Text>
        {categories.length > 0 && (
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}

        {categories.length == 0 && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 120,
            }}>
            <Text style={{color: COLORS.primary, ...FONTS.h3}}>No Record</Text>
          </View>
        )}
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.loginBtn} onPress={addExpense}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Add Expense
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddExpense;

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.background1,
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
    backgroundColor: COLORS.secondary,
    borderRadius: 15,
    padding: 15,
    paddingHorizontal: 60,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
});
