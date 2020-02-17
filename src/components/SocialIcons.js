import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('screen');
export const Facebook = props => {
  return (
    <View style={styles.container}>
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={props.onPress}>
        Login with Facebook
      </Icon.Button>
    </View>
  );
};
export const Instagram = props => {
  return (
    <View style={styles.container}>
      <Icon.Button
        name="instagram"
        backgroundColor="#e4405f"
        onPress={props.onPress}>
        Login with Instagram
      </Icon.Button>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    margin:6
  },
  icon:{
    margin: 10
  }
});
