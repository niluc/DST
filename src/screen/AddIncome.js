import {startOfMonth} from 'date-fns';
import React, {useState} from 'react';
import {
  StyleSheet,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import Calendar from '../Calendar';
import TextField from '../TextField';
import isOdd from 'is-odd';
import {icons, FONTS, SIZES, COLORS} from '../constants';

const AddIncome = () => {
  let cateList = [
    {
      id: 0,
    },
    {
      id: 1,
      title: 'Salary',
    },
    {
      id: 2,
      title: 'Reward',
    },
    {
      id: 3,
      title: 'Still Salary',
    },
  ];

  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState(cateList);
  const [category, setCategory] = useState('');

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
          onPress={() => setCategory(item.title)}
          style={{
            width: 130,
            padding: 15,
            marginHorizontal: 20,
            marginVertical: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: isOdd(index) ? COLORS.primary : COLORS.secondary,
            ...styles.shadow,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* Title */}
          <Text
            style={{
              ...FONTS.h3,
              color: isOdd(index) ? COLORS.black : COLORS.white,
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
        title={'Income Title'}
        onChange={setTitle}
        placeholder="Income Title"
      />
      <TextField
        title={'Amount'}
        onChange={setTitle}
        placeholder="Amount"
        keyboardType={'decimal-pad'}
        afterText="$"
      />
      <View style={{height: 120}}>
        <Text style={{...FONTS.texttitle}}>Income Category</Text>
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
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Add Income
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddIncome;

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
