import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import BigList from '../BigList';
import Entries from '../Entries';
import SmallList from '../SmallList';

const Home = ({navigation}) => {
  let biglist = [
    {
      id: 1,
      title: 'Total Salary',
      value: 150,
    },
    {
      id: 2,
      title: 'Expense',
      value: 300,
    },
    {
      id: 3,
      title: 'Expense Month',
      value: 300,
    },
  ];
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
  const [bigList, setBigList] = React.useState(biglist);
  const [entries, setEntries] = React.useState(entryList);
  return (
    <SafeAreaView style={styles.safe}>
      <BigList data={bigList} />
      <SmallList navigation={navigation} />
      <Entries data={entries} navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
});
