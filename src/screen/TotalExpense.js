import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';

import Calendar from '../Calendar';
import Circle from '../Circle';
import Chart from '../Chart';
import {COLORS} from '../constants';
import {ENTRIES_KEY, getData, clear} from '../Storage';
import {isSameDay, isSameMonth} from 'date-fns';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const TotalExpense = ({navigation}) => {
  const [entries, setEntries] = React.useState([]);
  const [entriesChange, setEntriesChange] = React.useState(true);
  const [date, setDate] = useState(new Date());
  const [spent, setSpent] = useState(0);
  const [budget, setBudget] = useState(1);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData(ENTRIES_KEY).then(data => {
        let tempEntries = JSON.parse(data);
        setEntries(tempEntries);

        // Get total salary and expense
        let salary = tempEntries
          .filter(item => item.value > 0)
          .reduce((x, y) => x + y.value, 0);
        // Get day expense
        let currentDay = date;
        let dayEntries = tempEntries.filter(item => {
          let parseDay = item.date.split('/').reverse();
          parseDay[1] -= 1;
          return isSameDay(currentDay, new Date(...parseDay));
        });
        let day_expense = -dayEntries
          .filter(item => item.value < 0)
          .reduce((x, y) => x + y.value, 0);
        setSpent(day_expense);
        setBudget(salary);

        // Get category
        let monthExpense = JSON.parse(data)
          .filter(item => {
            let parseDay = item.date.split('/').reverse();
            parseDay[1] -= 1;
            return isSameMonth(currentDay, new Date(...parseDay));
          })
          .filter(item => item.value < 0)
          .map(item => {
            item.value = -item.value;
            return item;
          });

        let cates = [...new Set(monthExpense.map(item => item.type))];
        let _categories = [];
        let id = 0;
        cates.forEach(element => {
          id++;
          let expenses = monthExpense.filter(item => item.type == element);
          let color =
            'rgb(' +
            getRandomInt(255) +
            ',' +
            getRandomInt(255) +
            ',' +
            getRandomInt(255) +
            ')';
          let category = {
            id: id,
            name: element,
            color: color,
            expenses: expenses,
          };
          _categories.push(category);
        });
        console.log(JSON.stringify(_categories));
        setCategories(_categories);
        setEntriesChange(false);
        setEntriesChange(true);
      });
    });
    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    // Get day expense
    let dayEntries = entries.filter(item => {
      let parseDay = item.date.split('/').reverse();
      parseDay[1] -= 1;
      return isSameDay(date, new Date(...parseDay));
    });
    console.log(JSON.stringify(dayEntries));
    let day_expense = -dayEntries
      .filter(item => item.value < 0)
      .reduce((x, y) => x + y.value, 0);
    console.log(day_expense);
    setSpent(day_expense);
  }, [date]);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={{marginHorizontal: 20}}>
          <Calendar setDate={setDate} />
        </View>
        <Circle
          value={spent}
          footer={
            'You have Spend total ' +
            ((spent / budget) * 100).toFixed() +
            '% of your budget'
          }
        />
        {entriesChange && <Chart data={categories} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TotalExpense;

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.white,
  },
});
let b = [
  {
    id: 1,
    name: 'Health',
    color: 'rgb(137,42,86)',
    expenses: [
      {
        id: 4,
        type: 'Health',
        value: 200,
        date: '20/11/2021',
        payment: 'Cash',
      },
    ],
  },
  {
    id: 2,
    name: 'Grocery',
    color: 'rgb(79,89,15)',
    expenses: [
      {
        id: 5,
        type: 'Grocery',
        value: 500,
        date: '20/11/2021',
        payment: 'Cash',
      },
    ],
  },
];
