import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';

import {icons, COLORS, SIZES, FONTS} from '../constants';

export default function BigList(props) {
  const [data, setData] = useState(props.data);

  const renderItem = ({item, index}) => (
    <View
      style={{
        width: 130,
        padding: 15,
        marginRight: 20,
        marginLeft: index == 0 ? SIZES.padding : 25,
        marginVertical: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: index % 2 == 0 ? COLORS.white : COLORS.primary,
        ...styles.shadow,
      }}>
      <Image
        source={icons.wallet}
        style={{
          width: 25,
          height: 25,
          marginBottom: 5,
          tintColor: index % 2 == 0 ? COLORS.black : COLORS.white,
        }}
      />
      {/* Title */}
      <Text
        style={{
          ...FONTS.h3,
          color: index % 2 == 0 ? COLORS.black : COLORS.white,
        }}>
        {item.title}
      </Text>
      <View style={{flex: 1}}></View>
      {/* Price */}
      <View
        style={{
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: index % 2 == 0 ? COLORS.black : COLORS.white,
            ...FONTS.body3,
            fontWeight: '700',
          }}>
          ${'\n'}
          {item.value.toFixed(2)}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{height: 200}}>
      {data.length > 0 && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
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
