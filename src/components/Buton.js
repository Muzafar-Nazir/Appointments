import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
// import {Button} from 'react-native-elements';

const {width, height} = Dimensions.get('screen');

export const Btn = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress} style={styles.btn}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00a1ff',
    borderRadius: 7,
   
  },
  btn: {
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.2
  },
});
