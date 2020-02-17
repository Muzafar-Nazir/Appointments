import React from 'react';
import {View, Text} from 'react-native';

const Header = props => {
  const {headerText, container} = styles;
  return (
    <View style={container}>
      <Text style={headerText}>{props.HeaderText}</Text>
    </View>
  );
};

export default Header;

const styles = {
  container: {
    backgroundColor: '#dbd9d9',
    alignItems: 'center',
    justifyConeten: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    elevation: 10,
    position: 'relative',
  },
  headerText: {
    fontSize: 20,
    color: 'black',
  },
};
