import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

const {width, height} = Dimensions.get('screen');
export const Forgotbtn = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: width - 110,
    alignItems: 'flex-end',
   
  },
  btnStyle: {},
  text: {
    color: '#00a1ff',
    fontWeight: 'bold',
  },
});
