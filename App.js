/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Quote from './components/quote';
import Footer from './components/footer';
import SettingIcon from './components/settingIcon';
import Settings from './components/settings';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Provider store={store}>
      <View style={styles.body}>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Settings />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Close Settings</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={styles.buttonOpen}
            onPress={() => setModalVisible(true)}>
            <SettingIcon />
          </Pressable>
        </View>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#79c2d0',
    borderRadius: 50,
    height: 550,
    width: 320,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderColor: 'white',
    borderWidth: 1,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#53a8b6',
    color: 'white',
    fontWeight: 'bold',
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 55,
    paddingVertical: 8,
    borderRadius: 50,

  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;
