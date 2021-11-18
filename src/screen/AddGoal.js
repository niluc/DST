import React from 'react';
import {StyleSheet,Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants"


const AddGoal = () => {
  return (
    <SafeAreaView style={styles.safe}>
    </SafeAreaView>
  );
};

export default AddGoal;

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