import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export const StarRating =  () => {
  const {container, textView, iconView} = styles;
  return (
    <View style={container}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  iconView: {
    marginTop: 5,
    flexDirection: 'row',
   
  },
  textView:{
      marginLeft: 5
  }
});
