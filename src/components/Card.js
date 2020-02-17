import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Card = props => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd', 
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 8,
    backgroundColor: 'white',
  },
});
