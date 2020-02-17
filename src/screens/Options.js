import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {Btn} from '../components/Buton';
import UserBtn from '../components/UserBtn';

const {width, height} = Dimensions.get('screen');
const Options = ({navigation}) => {
  return (

      <View style={styles.constiner}>
        <Icon
          name="heartbeat"
          type="font-awesome"
          color="#00a1ff"
          size={70}
          style={styles.logo}
        />
        <View style={styles.btnView}>
          <Btn onPress={() => navigation.navigate('AddClinic')} text="Admin" />
        </View>

        <View>
          <UserBtn text="User" onPress={() => navigation.navigate('Signin')} />
        </View>
      </View>
  
  );
};


Options.navigationOptions = ()=>{
  return{
    headerShown: false,
  }
}


export default Options;

const styles = StyleSheet.create({
  constiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {
    backgroundColor: '#00a1ff',
    width: width - 80,
    borderRadius: 10,
    marginTop: 30,
    
  },
  logo: {
    marginBottom: 50,
  },
});
