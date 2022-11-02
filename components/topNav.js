import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Routes, Route, Link} from 'react-router-native';
import Settings from './settings';

const TopNav = () => {
  return (
    <View style={styles.container}>
      <Text>To change keyword</Text>
      <Link to={'http://localhost:8081/settings'}>
        <Icon name="gears" size={25} color="#446a90" style={styles.icon} />
      </Link>
      <Routes>
        <Route
          exact
          path={'http://localhost:8081/settings'}
          element={<Settings />}
        />
      </Routes>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
    marginLeft: 180,
  },
  icon: {
    marginHorizontal: 20,
  },
});
export default TopNav;
