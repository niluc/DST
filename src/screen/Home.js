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
  const [bigList, setBigList] = React.useState(biglist);
  return (
    <SafeAreaView style={styles.safe}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/*<BigList data={bigList} />*/}
        <SmallList navigation={navigation} />
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
