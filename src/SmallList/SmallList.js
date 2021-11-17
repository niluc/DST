import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import isOdd from 'is-odd';

import {icons, COLORS, SIZES, FONTS} from '../constants';

export default function BigList(props) {
  let smallList = [
    {
      id: 1,
      title: 'Savings',
      icon: 'add_exclusive',
      navigate: () => {
        props.navigation.navigate('Saving');
      },
    },
    {
      id: 2,
      title: 'Reminders',
      icon: 'bell',
    },
    {
      id: 3,
      title: 'Budget',
      icon: 'wallet',
    },
  ];
  const [data, setData] = useState(smallList);

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={item.navigate}
      style={{
        width: 130,
        padding: 15,
        marginRight: 20,
        marginLeft: index == 0 ? SIZES.padding : 0,
        marginVertical: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: isOdd(index) ? COLORS.white : COLORS.primary,
        ...styles.shadow,
        alignItems: 'center',
      }}>
      <View
        style={{
          padding: 10,
          borderRadius: 10,
          marginBottom: 5,
          backgroundColor: isOdd(index) ? '#F0F1F5' : '#ABD8E8',
          marginHorizontal: 'auto',
          width: 45,
        }}>
        <Image
          source={icons[item.icon]}
          style={{
            width: 25,
            height: 25,
            tintColor: isOdd(index) ? COLORS.black : COLORS.white,
          }}
        />
      </View>
      {/* Title */}
      <Text
        style={{
          ...FONTS.h3,
          color: isOdd(index) ? COLORS.black : COLORS.white,
        }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{height: 130}}>
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
            height: 130,
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
