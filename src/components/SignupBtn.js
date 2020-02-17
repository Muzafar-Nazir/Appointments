import React, {Children} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

const {width, height} = Dimensions.get('screen');
export const SignupBtn = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress} style={styles.btnStyle}>
        <Text style={styles.text}>{props.textSingup}</Text>
        <Text style={styles.signup}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: width - 100,
    alignItems: 'flex-end',
  },
  btnStyle: {
    flexDirection: 'row',
  },
  text: {
    color: '#00a1ff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  signup: {
    color: '#00a1ff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
