/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Quote from './components/quote';
import Footer from './components/footer';
const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.body}>
        <Quote />
        <Footer />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#79c2d0',
    height: 900,
  },
});

export default App;
