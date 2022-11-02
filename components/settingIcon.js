import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingIcon = () => {
  return (
    <View style={styles.container}>
      <Text>Choose keyword for random quotes</Text>
      <Icon name="gears" size={25} color="#446a90" style={styles.icon} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
    marginLeft: 180,
  },
  icon: {
    marginHorizontal: 20,
  },
});
export default SettingIcon;
