import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONTS} from '../constants';
import {Picker} from '@react-native-picker/picker';

const Setting = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedTheme, setSelectedTheme] = useState();
  const [selectedSync, setSelectedSync] = useState();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={{marginVertical: 15}}>
        <Text style={{...FONTS.h2, marginBottom: 10}}>Language</Text>
        <Picker
          mode={'dropdown'}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          style={{
            ...styles.shadow,
            padding: 10,
            backgroundColor: 'white',
          }}>
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Tiếng Việt" value="vi" />
        </Picker>
      </View>
      <View style={{marginVertical: 15}}>
        <Text style={{...FONTS.h2, marginBottom: 10}}>Theme</Text>
        <Picker
          mode={'dropdown'}
          selectedValue={selectedTheme}
          onValueChange={(itemValue, itemIndex) => setSelectedTheme(itemValue)}
          style={{
            ...styles.shadow,
            padding: 10,
            backgroundColor: 'white',
          }}>
          <Picker.Item label="Light" value="light" />
          <Picker.Item label="Dark" value="dark" />
        </Picker>
      </View>
      <View style={{marginVertical: 15}}>
        <Text style={{...FONTS.h2, marginBottom: 10}}>Account Sync</Text>
        <Picker
          mode={'dropdown'}
          selectedValue={selectedSync}
          onValueChange={(itemValue, itemIndex) => setSelectedSync(itemValue)}
          style={{
            ...styles.shadow,
            padding: 10,
            backgroundColor: 'white',
          }}>
          <Picker.Item label="On" value="on" />
          <Picker.Item label="Off" value="off" />
        </Picker>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Reset setting
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Setting;

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.white,
    padding: 20,
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
  loginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BF3B3B',
    borderRadius: 15,
    padding: 15,
    paddingHorizontal: 60,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
});
