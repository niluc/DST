import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import { COLORS } from "../constants"

const ForgotPassword = () => {
  return (
    <SafeAreaView style={styles.safe}>
    </SafeAreaView>
  );
};

export default ForgotPassword;

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: COLORS.background1,
  },
});
