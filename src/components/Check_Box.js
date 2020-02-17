import React from 'react';
import {View,CheckBox} from 'react-native';


export default () => {
  return (
    <View>
      <CheckBox 
        title= 'Remember Me'
        size={35} />
    </View>
  );
};
