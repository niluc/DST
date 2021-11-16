import React from 'react';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Overview</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

export const styles=StyleSheet.create({
    safe: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 1,
    top: 64,
    alignItems: "center",
    paddingHorizontal: 10
  },
  headerText: {
      fontSize: 25,
      fontWeight: "600",
      color: '#000000'
  },
});