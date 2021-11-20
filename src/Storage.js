import AsyncStorage from '@react-native-async-storage/async-storage';

export const ENTRIES_KEY = '@entries';

export const getData = (STORAGE_KEY, setData) => {
  _retrieveData(STORAGE_KEY, setData);
};
export const saveData = (STORAGE_KEY, data) => {
  _storeData(STORAGE_KEY, JSON.stringify(data));
};
export const clear = () => {
  AsyncStorage.clear();
};

_retrieveData = async (id, setData) => {
  try {
    const value = await AsyncStorage.getItem('@App:' + id);
    if (value !== null) {
      console.log('found: ' + id + '=' + value);
      setData(JSON.parse(value));
    } else {
      console.log('Not found: ' + id);
    }
  } catch (error) {
    console.log('Failure retrieving ' + id + ' error: ' + error);
  }
};

_storeData = async (id, value) => {
  try {
    await AsyncStorage.setItem('@App:' + id, value);
    console.log('saved');
  } catch (error) {
    console.log('Failure saving: ' + error);
  }
};

export default {ENTRIES_KEY, getData, saveData};
