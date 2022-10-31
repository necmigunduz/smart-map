import React from 'react';
import {View, Button, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getQuotes} from '../redux/quoteSlice';

const Quotes = () => {
  const {quotes, isLoading} = useSelector(state => state.quotes);
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(getQuotes());
    console.log('clicked!')
  };

  return (
    <View>
      <Button title="Update" onPress={handleButton} />
      {quotes.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {quotes.map(q => (
            <Text key={q.id}>{q.content}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Quotes;
