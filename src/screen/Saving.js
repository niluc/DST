import React from 'react';
import {StyleSheet,Pressable, SafeAreaView, Text, TouchableOpacity, Button, View} from "react-native";


const Saving = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="AddGoal"
          onPress={() => {navigation.navigate('AddGoal')}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Saving;

export const styles=StyleSheet.create({
    safe: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});