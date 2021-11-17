import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import {icons, COLORS, SIZES, FONTS} from '../constants';

export default function Circle(props) {
  return (
    <View style={{...styles.box}}>
      {'header' in props && (
        <Text
          style={{
            ...FONTS.body3,
            fontWeight: '600',
            padding: 10,
            textAlign: 'center',
          }}>
          {props.header}
        </Text>
      )}
      <View
        style={{
          height: 120,
          width: 120,
          borderRadius: 60,
          backgroundColor: '#93E2FF',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{...FONTS.h2, fontWeight: '700', color: 'white'}}>
            ${props.value}
          </Text>
        </View>
      </View>
      {'footer' in props && (
        <Text
          style={{
            ...FONTS.body3,
            fontWeight: '600',
            padding: 10,
            textAlign: 'center',
          }}>
          {props.footer}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
