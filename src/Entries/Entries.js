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

export default function Entries(props) {
  const [data, setData] = useState(props.data);

  const renderItem = ({item, index}) => (
    <View
      style={{
        paddingHorizontal: 15,
        paddingVertical: 5,
        flexDirection: 'row',
      }}>
      {/* Title */}
      <View
        style={{
          flexDirection: 'column',
        }}>
        <Text
          style={{
            ...FONTS.h2,
            fontWeight: '700',
            color: COLORS.black,
          }}>
          {item.type}
        </Text>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body3,
            fontWeight: '900',
            textAlign: 'right',
          }}>
          {item.date}
        </Text>
      </View>
      <View style={{flex: 1}}></View>
      {/* Price */}
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: COLORS.black,
            ...FONTS.body3,
            fontWeight: '700',
            textAlign: 'right',
          }}>
          {item.value.toFixed(2)}$
        </Text>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body3,
            fontWeight: '900',
            textAlign: 'right',
          }}>
          {item.payment}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{height: 400, flex: 1, margin: 25}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{...FONTS.h1, color: 'black', fontWeight: '700'}}>
          Latest Entries
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Entries')}
          style={{
            width: 45,
            height: 45,
            backgroundColor: COLORS.primary,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={icons.three_dot}
            style={{
              width: 25,
              height: 8,
              tintColor: COLORS.secondary,
            }}
          />
        </TouchableOpacity>
      </View>
      {data.length > 0 && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      )}

      {data.length == 0 && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 200,
          }}>
          <Text style={{color: COLORS.primary, ...FONTS.h3}}>No Record</Text>
        </View>
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
});
