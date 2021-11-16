import React from 'react';
import {StyleSheet,Pressable, SafeAreaView, Text, TouchableOpacity, View, Button } from "react-native";


const Add = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="AddIncome"
          onPress={() => {navigation.navigate('AddIncome')}}
        />
        <Button
          title="AddExpense"
          onPress={() => navigation.navigate('AddExpense')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Add;

export const styles=StyleSheet.create({
    safe: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});