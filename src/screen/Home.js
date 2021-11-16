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

const Home = ({navigation}) => {
  let data = [
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
  const [listData, setData] = React.useState(data);
  return (
    <SafeAreaView style={styles.safe}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <BigList data={listData} />
        <Button
          title="Saving"
          onPress={() => {
            navigation.navigate('Saving');
          }}
        />
        <Button
          title="Entries"
          onPress={() => navigation.navigate('Entries')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

export const styles = StyleSheet.create({
  safe: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
