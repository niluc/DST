import React from 'react';
<<<<<<< Updated upstream
import {StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Button } from "react-native";
=======
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import Reminders from '../Reminder';
import { COLORS } from "../constants"
>>>>>>> Stashed changes

const Reminder = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="SetReminder"
          onPress={() => navigation.navigate('SetReminder')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Reminder;

<<<<<<< Updated upstream
export const styles=StyleSheet.create({
    safe: {
    flexDirection: 'row',
    justifyContent: 'center',
=======
export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 25,
    backgroundColor: COLORS.white,
>>>>>>> Stashed changes
  },
});