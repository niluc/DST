import React from 'react';
import {StyleSheet,Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";


const AddGoal = () => {
  return (
    <SafeAreaView style={styles.safe}>
    </SafeAreaView>
  );
};

export default AddGoal;

export const styles=StyleSheet.create({
    safe: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});