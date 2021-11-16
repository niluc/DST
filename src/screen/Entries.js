import React from 'react';
import {StyleSheet,Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";


const Entries = () => {
  return (
    <SafeAreaView style={styles.safe}>
    </SafeAreaView>
  );
};

export default Entries;

export const styles=StyleSheet.create({
    safe: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});