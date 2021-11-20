import React, {useState, useEffect} from 'react';
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
import {ENTRIES_KEY, getData, clear} from '../Storage';

const Add = ({navigation}) => {
  const [entries, setEntries] = useState([]);
  const [entriesChange, setEntriesChange] = useState(true);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData(ENTRIES_KEY).then(data => {
        setEntries(JSON.parse(data));
        setEntriesChange(false);
        setEntriesChange(true);
      });
    });
    return unsubscribe;
  }, [navigation]);
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
      {entriesChange && <EntriesList data={entries} navigation={navigation} />}
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
