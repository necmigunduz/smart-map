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
import Quotes from './components/quotes';
const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Quotes />
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
