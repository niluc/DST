import React, {useEffect} from 'react';
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
import {ENTRIES_KEY, getData, clear} from '../Storage';

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
  const [entries, setEntries] = React.useState();
  const [bigList, setBigList] = React.useState(biglist);
  useEffect(() => {
    // clear();
    getData(ENTRIES_KEY, setEntries);
  }, []);
  return (
    <SafeAreaView style={styles.safe}>
      {/*
       */}
      <BigList data={bigList} />
      <SmallList navigation={navigation} />
      {!(entries === undefined) && (
        <Entries data={entries} navigation={navigation} />
      )}
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
