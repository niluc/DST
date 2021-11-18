import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import EntriesList from '../Entries';

const Entries = () => {
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
      <EntriesList data={entries} />
    </SafeAreaView>
  );
};

export default Entries;

export const styles = StyleSheet.create({
  safe: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
