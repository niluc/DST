import React from 'react';
import {StyleSheet,Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";


const Add = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.headerContainer}>
        {/* <Pressable
          onPress={() => {
            setTimesPressed((current) => current + 1);
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : 'white'
            },
            styles.wrapperCustom
          ]}>
          {({ pressed }) => (
            <Text style={styles.text}>
              {pressed ? 'Pressed!' : 'Press Me'}
            </Text>
          )}
        </Pressable> */}
        <Text style={styles.headerText}>Add</Text>
      </View>
    </SafeAreaView>
  );
};

export default Add;

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