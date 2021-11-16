import React from 'react';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Button } from "react-native";

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Saving"
          onPress={() => {navigation.navigate('Saving')}}
        />
        <Button
          title="Entries"
          onPress={() => navigation.navigate('Entries')}
        />
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
});