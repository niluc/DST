import React from 'react';
<<<<<<< Updated upstream
import {StyleSheet,Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

=======
import {StyleSheet, SafeAreaView} from 'react-native';
import EntriesList from '../Entries';
import { COLORS } from "../constants"
>>>>>>> Stashed changes

const Entries = () => {
  return (
    <SafeAreaView style={styles.safe}>
    </SafeAreaView>
  );
};

export default Entries;

<<<<<<< Updated upstream
export const styles=StyleSheet.create({
    safe: {
    flexDirection: 'row',
    justifyContent: 'center',
=======
export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: COLORS.background1,
>>>>>>> Stashed changes
  },
});