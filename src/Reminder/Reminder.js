import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import PushNotification from "react-native-push-notification";
import {REMINDER_KEY} from '../Storage';
import {icons, COLORS, SIZES, FONTS} from '../constants';



export default function Reminder(props) {
  const [data, setData] = useState(props.data);

  const deleteNotification = () => {
    PushNotification.cancelAllLocalNotifications();
  }

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      
    >
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          borderRadius: 10,
          backgroundColor: 'white',
          marginVertical: 5,
          ...styles.shadow,
        }}>
        {/* Title */}
        <View
          style={{
            flexDirection: 'column',
          }}>
          <Text
            style={{
              ...styles.font,
              fontWeight: '700',
              color: COLORS.black,
            }}>
            {item.type}
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              ...styles.font,

              fontWeight: '900',
            }}>
            {item.value.toFixed(2)}$
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
              color: COLORS.gray,
              ...styles.font,

              fontWeight: '900',
              textAlign: 'right',
            }}>
            Due on {'\n'}
            {item.date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{
          marginBottom: 120,}}>
      {data.length > 0 && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      )}

      <TouchableOpacity
        onPress={() => props.navigation.navigate('SetReminder')}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          height: 65,
          borderRadius: 10,
          borderStyle: 'dotted',
          borderColor: 'gray',
          borderWidth: 1,
        }}>
        <Image
          source={icons.plus}
          style={{
            width: 30,
            height: 30,
            tintColor: COLORS.black,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { 
        deleteNotification();
        Alert.alert('Success', 'Deleted All Notifications.', [{text: 'OK'}]);
         }}>
        <Text style={{ ...styles.reset, marginTop: 10 }}>Delete All Notifications</Text>
      </TouchableOpacity>
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
  reset: {
    color: COLORS.red,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  font: {
    fontSize: 18,
  },
});
