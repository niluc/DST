import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import EntriesList from '../Entries';
import {COLORS} from '../constants';
import {ENTRIES_KEY, getData, clear} from '../Storage';

const Entries = ({navigation}) => {
  const [entries, setEntries] = React.useState([]);
  const [entriesChange, setEntriesChange] = React.useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData(ENTRIES_KEY).then(data => {
        setEntries(JSON.parse(data));
        setEntriesChange(false);
        setEntriesChange(true);
      });
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safe}>
      {entriesChange && <EntriesList data={entries} />}
    </SafeAreaView>
  );
};

export default Entries;

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: COLORS.background1,
  },
});
