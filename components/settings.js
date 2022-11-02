import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Settings = () => {
  const [keyword, setKeyword] = useState();
  return (
    <View style={styles.settings}>
      <Text style={styles.title}>Select a keyword</Text>
      <Picker
        selectedValue={keyword}
        onValueChange={(itemValue, itemIndex) => setKeyword(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Java" value="Java" style={styles.pickerItem} />
        <Picker.Item
          label="JavaScript"
          value="Javascript"
          style={styles.pickerItem}
        />
      </Picker>
      <Text style={styles.keyword}>
        Selected keyword: {'  '}
        <Text style={styles.selected}>{keyword}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  settings: {
    padding: 50,
  },
  title: {
    marginBottom: 5,
    fontSize: 18,
  },
  keyword: {
    marginTop: 15,
  },
  picker: {
    width: 200,
    height: 20,
  },
  pickerItem: {
    backgroundColor: '#53a8b6',
  },
  selected: {
    color: 'black',
  },
});

export default Settings;
