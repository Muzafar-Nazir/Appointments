import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export const Timing = props => {
  const {container, textView, iconView} = styles;
  return (
    <View style={container}>
      <View style={iconView}>
        <Icon size={19} name="clock-o" type="font-awesome" color="#00a1ff" />
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconView: {
    marginTop: 5,
    flexDirection: 'row',
  },
});
