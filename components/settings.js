import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// react-native-picker/picker library for dropdown
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import {setKey} from '../redux/quoteSlice';

const Settings = () => {
  // set keyword from dropdown
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  // send keyword from state to Redux store
  useEffect(() => {
    dispatch(setKey(keyword));
  }, [dispatch, keyword]);

  return (
    <View style={styles.settings}>
      <Text style={styles.title}>Select a keyword</Text>
      {/* Dropdown */}
      <Picker
        selectedValue={keyword}
        onValueChange={(itemValue, itemIndex) => {
          setKeyword(itemValue);
        }}
        style={styles.picker}>
        <Picker.Item
          label="Please select a keyword"
          value="0"
          style={styles.select}
        />
        <Picker.Item
          label="Famous quotes"
          value="famous-quotes"
          style={styles.pickerItem}
        />
        <Picker.Item
          label="Business"
          value="business"
          style={styles.pickerItem}
        />
        <Picker.Item label="Change" value="change" style={styles.pickerItem} />
        <Picker.Item
          label="Character"
          value="character"
          style={styles.pickerItem}
        />
        <Picker.Item
          label="Competition"
          value="competition"
          style={styles.pickerItem}
        />
        <Picker.Item
          label="Conservative"
          value="conservative"
          style={styles.pickerItem}
        />
        <Picker.Item
          label="Courage"
          value="courage"
          style={styles.pickerItem}
        />
        <Picker.Item
          label="Education"
          value="education"
          style={styles.pickerItem}
        />
        <Picker.Item label="Faith" value="faith" style={styles.pickerItem} />
        <Picker.Item label="Family" value="family" style={styles.pickerItem} />
        <Picker.Item label="Film" value="film" style={styles.pickerItem} />
        <Picker.Item
          label="Freedom"
          value="freedom"
          style={styles.pickerItem}
        />
        <Picker.Item
          label="Friendship"
          value="friendship"
          style={styles.pickerItem}
        />
        <Picker.Item label="Future" value="future" style={styles.pickerItem} />
        <Picker.Item
          label="Happiness"
          value="happiness"
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
    width: 260,
    height: 20,
  },
  pickerItem: {
    backgroundColor: 'lightblue',
    marginEnd: 2,
  },
  select: {
    backgroundColor: '#5585b5',
    color: 'white',
  },
  selected: {
    color: 'black',
  },
});

export default Settings;
