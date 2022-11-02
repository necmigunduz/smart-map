import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Settings = () => {
  return (
    <View style={styles.settings}>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  settings: {
    padding: 50,
  },
});

export default Settings;