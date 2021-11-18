import React from 'react';
import {StyleSheet,Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants"


const AddExpense = () => {
  return (
    <SafeAreaView style={styles.safe}>
    
    </SafeAreaView>
  );
};

export default AddExpense;

export const styles=StyleSheet.create({
  safe: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: COLORS.background1,
  },
});