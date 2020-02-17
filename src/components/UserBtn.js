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

 const UserBtn = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress} style={styles.btn}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default UserBtn;

const styles = StyleSheet.create({
  container: {
    width: width - 80,
    backgroundColor: '#e4405f',
    borderRadius: 7,
    marginTop: 20,
  },
  btn: {
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});
