import React, {useEffect} from 'react';
import {View, Button, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getQuotes} from '../redux/quoteSlice';

const Quotes = () => {
  const {quotes, isLoading} = useSelector(state => state.quotes);
  const dispatch = useDispatch();
  const handleButton = () => {
    console.log(quotes);
  };
  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);

  return (
    <View>
      <Button title="Update" onPress={handleButton} />
    </View>
  );
};

export default Quotes;
