import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export const ImageView = () => {
  const {container, imgStyle} = styles;
  return (
    <View>
      <Image source={require('../../assets/img2.jpg')}
      style={imgStyle}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
  },
  imgStyle:{
      width: 60,
      height: 60,
      borderRadius: 100,
      margin: 10
  }
});
