import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
import {icons, COLORS, SIZES, FONTS} from '../constants';

export default function BigList(props) {
  const [data, setData] = useState(props.data);

  const renderItem = ({item, index}) => (
    <View
      style={{
        width: 160,
        padding: 15,
        marginRight: 20,
        marginLeft: index == 0 ? SIZES.padding : 45,
        marginVertical: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...styles.shadow,
      }}>
      <Image
        source={icons.wallet}
        style={{
          width: 25,
          height: 25,
          marginBottom: 5,
          tintColor: COLORS.black,
        }}
      />
      {/* Title */}
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.black,
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
            color: COLORS.black,
            ...FONTS.body5,
            fontWeight: '700',
          }}>
          ${'\n'}
          {
            item.value.toFixed(0).toString().length >= 10 ? (item.value - item.value % 1e9) / 1e9 : (
              item.value.toFixed(0).toString().length >= 7 ? (item.value - item.value % 1e6) / 1e6 : (
                item.value.toFixed(0).toString().length >= 6 ? (item.value - item.value % 1e3) / 1e3 : (
                  item.value.toFixed(0).toString().length <= 2 ? item.value.toFixed(2) : item.value.toFixed(5 - item.value.toFixed(0).toString().length)
                ) 
              )
            )
          }
          {
            item.value.toFixed(0).toString().length >= 10 ? 'B' : (
              item.value.toFixed(0).toString().length >= 7 ? 'M' : (
                item.value.toFixed(0).toString().length >= 6 ? 'K' : '' 
              )
            )
          }
          {
            item.value.toFixed(0).toString().length >= 10 ? ((item.value % 1e9) / Math.pow(10,item.value.toFixed(0).toString().length-4)).toFixed(0) : (
              item.value.toFixed(0).toString().length >= 7 ? ((item.value % 1e6) / Math.pow(10,item.value.toFixed(0).toString().length-4)).toFixed(0) : (
                item.value.toFixed(0).toString().length >= 6 ? ((item.value % 1e3) / Math.pow(10,item.value.toFixed(0).toString().length-4)).toFixed(0) : '' 
              )
            )
          }
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{height: 250}}>
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
