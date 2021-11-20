import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import BigList from '../BigList';
import Entries from '../Entries';
import SmallList from '../SmallList';
import {ENTRIES_KEY, getData, clear} from '../Storage';
import {isSameMonth} from 'date-fns';

const Home = ({navigation}) => {
  const [entries, setEntries] = React.useState([]);
  const [bigList, setBigList] = React.useState([]);
  const [entriesChange, setEntriesChange] = React.useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData(ENTRIES_KEY).then(data => {
        let tempEntries = JSON.parse(data);
        setEntries(tempEntries.slice(0, 20));

        // Get total salary and expense
        let salary = tempEntries
          .filter(item => item.value > 0)
          .reduce((x, y) => x + y.value, 0);
        let expense = -tempEntries
          .filter(item => item.value < 0)
          .reduce((x, y) => x + y.value, 0);
        // Get month salary and expense
        let currentDay = new Date();
        let monthEntries = tempEntries.filter(item => {
          let parseDay = item.date.split('/').reverse();
          parseDay[1] -= 1;
          return isSameMonth(currentDay, new Date(...parseDay));
        });
        let month_salary = monthEntries
          .filter(item => item.value > 0)
          .reduce((x, y) => x + y.value, 0);
        let month_expense = -monthEntries
          .filter(item => item.value < 0)
          .reduce((x, y) => x + y.value, 0);
        setBigList([
          {
            id: 1,
            title: 'Monthly Salary',
            value: month_salary,
          },
          {
            id: 2,
            title: 'Monthly Expense',
            value: month_expense,
          },
          {
            id: 3,
            title: 'Total Salary',
            value: salary,
          },
          {
            id: 4,
            title: 'Expense',
            value: expense,
          },
        ]);
        setEntriesChange(false);
        setEntriesChange(true);
      });
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={styles.safe}>
      {/*
       */}
      {entriesChange && <BigList data={bigList} />}
      <SmallList navigation={navigation} />
      {entriesChange && <Entries data={entries} navigation={navigation} />}
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
