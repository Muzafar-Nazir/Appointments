import React, {Children} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

const {width, height} = Dimensions.get('screen');
export const LoginWithSocialNetworks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login with Social Media</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  btnStyle: {},
  text: {
    color: '#00a1ff',
    fontWeight: 'bold',
  },
});
