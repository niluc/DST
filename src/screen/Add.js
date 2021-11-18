import React from 'react';
import {
  StyleSheet,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
} from 'react-native';
import {COLORS, SIZES, FONTS, icons} from '../constants';
import EntriesList from '../Entries';

const Add = ({navigation}) => {
  let entryList = [
    {
      id: 1,
      type: 'Food',
      date: '10/08/2021',
      value: -500,
      payment: 'Cash',
    },
    {
      id: 2,
      type: 'Food',
      date: '1/08/2021',
      value: -300,
      payment: 'Cash',
    },
    {
      id: 3,
      type: 'Food',
      date: '28/07/2021',
      value: -100,
      payment: 'Cash',
    },
  ];
  const [entries, setEntries] = React.useState(entryList);
  return (
    <SafeAreaView style={styles.safe}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          margin: 50,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddIncome');
          }}
          style={{
            width: 150,
            padding: 20,
            marginVertical: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...styles.shadow,
            alignItems: 'center',
          }}>
          <View
            style={{
              padding: 10,
              borderRadius: 10,
              marginBottom: 5,
              backgroundColor: '#F0F1F5',
              marginHorizontal: 'auto',
              width: 45,
            }}>
            <Image
              source={icons.wallet}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.black,
              }}
            />
          </View>
          {/* Title */}
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.black,
            }}>
            Add Income
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddExpense')}
          style={{
            width: 150,
            padding: 20,
            marginVertical: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
            ...styles.shadow,
            alignItems: 'center',
          }}>
          <View
            style={{
              padding: 10,
              borderRadius: 10,
              marginBottom: 5,
              backgroundColor: '#ABD8E8',
              marginHorizontal: 'auto',
              width: 45,
            }}>
            <Image
              source={icons.wallet}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.white,
              }}
            />
          </View>
          {/* Title */}
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.white,
            }}>
            Add Expense
          </Text>
        </TouchableOpacity>
      </View>
      <EntriesList data={entries} navigation={navigation} />
    </SafeAreaView>
  );
};

export default Add;

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.white,
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
});
