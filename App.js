/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text style={styles.text}>Test</Text>
        <Button title="Test Button" color={'black'} style={styles.button} />
        <Text style={styles.text}>AAAA</Text>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    backgroundColor: 'green',
    color: 'white',
  },
  button: {
    backgroundColor: 'black',
  },
});

export default App;
