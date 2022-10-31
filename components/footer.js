import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Thank you for using Quote of Day app.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    top: 650,
    fontSize: 12,
    backgroundColor: 'lightgray',
    paddingVertical: 3,
    width: 400,
    paddingHorizontal: '15%',
  },
  text: {
    color: 'white',
  },
});

export default Footer;
