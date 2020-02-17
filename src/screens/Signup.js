import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import InputText from '../components/InputText';
import {Btn} from '../components/Buton';

const {width, height} = Dimensions.get('screen');

const Signup = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.constainer}>
        <View style={styles.firstContainer}>
          <Text style={styles.signin}>Sign up</Text>
        </View>
        <View style={styles.emailInputView}>
          <InputText name="First Name" />
        </View>

        <View style={styles.emailInputView}>
          <InputText name="Last Name" />
        </View>

        <View style={styles.emailInputView}>
          <InputText name="Conact Number" />
        </View>

        <View style={styles.emailInputView}>
          <InputText name="Email" />
        </View>

        <View style={styles.emailInputView}>
          <InputText name="Password" />
        </View>

        <View style={styles.emailInputView}>
          <InputText name="Confirm Password" />
        </View>
        <View style={styles.btnView}>
          <Btn
            onPress={() => navigation.navigate('Signin')}
            text="Signinup"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  firstContainer: {
    alignItems: 'center',
  },
  constainer: {
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  signin: {
    paddingBottom: 50,
    color: '#00a1ff',
    fontWeight: 'bold',
    fontSize: 23,
    letterSpacing: 0.5,
  },
  emailInputView: {
    marginHorizontal: 10,
  },
  btnStyle: {
    flexDirection: 'row',
  },
  signinup: {
    marginBottom: 60,
  },
  socialMedia: {
    alignItems: 'flex-end',
  },
  socialIcons: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  btnView: {
    backgroundColor: '#00a1ff',
    width: width - 80,
    borderRadius: 10,
    marginTop: 30
  },
});
