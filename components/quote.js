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
        <Text style={styles.title}>Quote of day</Text>
        <TouchableOpacity onPress={handleButton} style={styles.button}>
          <Text style={styles.btnText}>Update</Text>
        </TouchableOpacity>
        {quote.length === 0 ? (
          <Text style={styles.loading}>
            Click on Update button to see the quote of day.
          </Text>
        ) : (
          <View>
            <Text style={styles.text}>"{quote}"</Text>
            <Text style={styles.auth}>{auth}</Text>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'lightgray',
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
  },
  title: {
    backgroundColor: 'gray',
    color: 'white',
    height: 100,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    borderColor: 'lightgray',
    borderWidth: 5,
    borderRadius: 20,
    padding: 30,
    margin: 25,
  },
  text: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    textAlign: 'justify',
    marginHorizontal: 25,
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
});

export default Quote;
