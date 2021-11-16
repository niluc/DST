import React from 'react';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const Setting = () => {
  return (
    <SafeAreaView style={styles.safe}>
    </SafeAreaView>
  );
};

export default Setting;

export const styles=StyleSheet.create({
    safe: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});