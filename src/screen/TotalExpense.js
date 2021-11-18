import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import Calendar from '../Calendar';
import Circle from '../Circle';
import Chart from '../Chart';
import {COLORS} from '../constants';

const TotalExpense = () => {
  let categoriesData = [
    {
      id: 1,
      name: 'Education',
      color: COLORS.yellow,
      expenses: [
        {
          id: 1,
          title: 'Tuition Fee',
          description: 'Tuition fee',
          total: 100.0,
        },
        {
          id: 2,
          title: 'Arduino',
          description: 'Hardward',
          total: 30.0,
        },
        {
          id: 3,
          title: 'Javascript Books',
          description: 'Javascript books',
          total: 20.0,
        },
        {
          id: 4,
          title: 'PHP Books',
          description: 'PHP books',
          total: 20.0,
        },
      ],
    },
    {
      id: 2,
      name: 'Nutrition',
      color: COLORS.lightBlue,
      expenses: [
        {
          id: 5,
          title: 'Vitamins',
          description: 'Vitamin',
          total: 25.0,
        },

        {
          id: 6,
          title: 'Protein powder',
          description: 'Protein',
          total: 50.0,
        },
      ],
    },
    {
      id: 3,
      name: 'Child',
      color: COLORS.darkgreen,
      expenses: [
        {
          id: 7,
          title: 'Toys',
          description: 'toys',
          total: 25.0,
        },
        {
          id: 8,
          title: 'Baby Car Seat',
          description: 'Baby Car Seat',
          total: 100.0,
        },
        {
          id: 9,
          title: 'Pampers',
          description: 'Pampers',
          total: 100.0,
        },
        {
          id: 10,
          title: 'Baby T-Shirt',
          description: 'T-Shirt',
          total: 20.0,
        },
      ],
    },
    {
      id: 4,
      name: 'Beauty & Care',
      color: COLORS.peach,
      expenses: [
        {
          id: 11,
          title: 'Skin Care product',
          description: 'skin care',
          total: 10.0,
        },
        {
          id: 12,
          title: 'Lotion',
          description: 'Lotion',
          total: 50.0,
        },
        {
          id: 13,
          title: 'Face Mask',
          description: 'Face Mask',
          total: 50.0,
        },
        {
          id: 14,
          title: 'Sunscreen cream',
          description: 'Sunscreen cream',
          total: 50.0,
        },
      ],
    },
    {
      id: 5,
      name: 'Sports',
      color: COLORS.purple,
      expenses: [
        {
          id: 15,
          title: 'Gym Membership',
          description: 'Monthly Fee',
          total: 45.0,
        },
        {
          id: 16,
          title: 'Gloves',
          description: 'Gym Equipment',
          total: 15.0,
        },
      ],
    },
    {
      id: 6,
      name: 'Clothing',
      color: COLORS.red,
      expenses: [
        {
          id: 17,
          title: 'T-Shirt',
          description: 'Plain Color T-Shirt',
          total: 20.0,
        },
        {
          id: 18,
          title: 'Jeans',
          description: 'Blue Jeans',
          total: 50.0,
        },
      ],
    },
  ];
  const [categories, setCategories] = React.useState(categoriesData);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={{marginHorizontal: 20}}>
          <Calendar />
        </View>
        <Circle
          value={1800}
          footer={'You have Spend total 60% of your budget'}
        />
        <Chart data={categories} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TotalExpense;

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    justifyContent: 'flex-start',
  },
});
