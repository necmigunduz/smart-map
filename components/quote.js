import React, {useState} from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getQuote} from '../redux/quoteSlice';
import {StyleSheet} from 'react-native';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [auth, setAuth] = useState('');
  const {quotes} = useSelector(state => state.quotes);
  const dispatch = useDispatch();
  const handleButton = () => {
    dispatch(getQuote());
    setQuote(quotes.content);
    setAuth(quotes.author);
    console.log(quote);
  };

  return (
    <View>
      <View>
        <Text style={styles.title}>Quote of Day</Text>
        <TouchableOpacity onPress={handleButton} style={styles.button}>
          <Text style={styles.btnText}>Update</Text>
        </TouchableOpacity>
        {quote === '' ? (
          <Text style={styles.loading}>
            Click on Update button to see the quote of day.
          </Text>
        ) : quote ? (
          <View style={styles.card}>
            <Text style={styles.dashes}>----------------</Text>
            <Text style={styles.text}>"{quote}"</Text>
            <Text style={styles.auth}>{auth}</Text>
            <Text style={styles.dashes}>----------------</Text>
          </View>
        ) : (
          <Text style={styles.loading}>Loading...</Text>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#53a8b6',
    padding: 10,
    color: 'black',
    width: 200,
    borderRadius: 50,
    marginVertical: 20,
    marginHorizontal: '24%',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 55,
    paddingVertical: 8,
    borderRadius: 50,
  },
  card: {
    backgroundColor: '#bbe4e9',
    marginHorizontal: 20,
    borderRadius: 50,
  },
  title: {
    backgroundColor: '#5585b5',
    color: 'white',
    height: 100,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    borderColor: '#bbe4e9',
    borderWidth: 5,
    borderRadius: 20,
    padding: 30,
    margin: 25,
  },
  text: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    textAlign: 'left',
    marginHorizontal: 10,
    fontSize: 16,
    fontStyle: 'italic',
  },
  auth: {
    fontWeight: '900',
    textAlign: 'right',
    marginRight: 50,
  },
  loading: {
    textAlign: 'center',
  },
  dashes: {
    letterSpacing: 8,
    textAlign: 'center',
    color: '#5585b5',
    fontSize: 30,
  },
});

export default Quote;
