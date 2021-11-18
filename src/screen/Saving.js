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

<<<<<<< Updated upstream
export const styles=StyleSheet.create({
    safe: {
    flexDirection: 'row',
=======
export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: COLORS.background1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  box: {
    padding: 10,
    marginHorizontal: 20,
>>>>>>> Stashed changes
    justifyContent: 'center',
  },
});