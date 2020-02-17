import React, {Children, useState} from 'react';
import {
  View,
  Text,
  Linking,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';
import InputText from '../components/InputText';
import {Btn} from '../components/Buton';
import {Forgotbtn} from '../components/ForgotBtn';
import CheckBox from '../components/Check_Box';
import {SignupBtn} from '../components/SignupBtn';
import {LoginWithSocialNetworks} from '../components/LoginWith';
import {Facebook, Instagram} from '../components/SocialIcons';

const {width, height} = Dimensions.get('screen');

const Signin = ({navigation}) => {
  const {state, setState} = useState('');
  const {constainer, emailInputView} = styles;
  return (
    <ScrollView>
      <View style={constainer}>
        <Icon 
          name="heartbeat" 
          type="font-awesome" 
          color="#00a1ff"
          size={50} />
        <View style={styles.firstContainer}>
          <Text style={styles.signin}>Sign In</Text>
        </View>
        <View style={emailInputView}>
          <InputText name="Email" />
        </View>

        <View style={emailInputView}>
          <InputText name="Password" />
        </View>

        <View style={styles.btnStyle}>
          <CheckBox />
          <Forgotbtn />
        </View>
        <View style={styles.btnView}>
          <Btn
            onPress={() => navigation.navigate('Dashboard')}
            text="Login"
          />
        </View>

        <View style={styles.signinup}>
          <SignupBtn
            textSingup="Dont have an account?"
            onPress={() => navigation.navigate('Signup')}
          />
        </View>

        <View style={styles.socialMedia}>
          <LoginWithSocialNetworks />
        </View>

        <View style={styles.socialIcons}>
          <Facebook
            onPress={() => Linking.openURL('https://www.facebook.com/')}
          />
          <Instagram
            onPress={() => Linking.openURL('https://www.instagram.com/')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  firstContainer: {
    alignItems: 'center',
  },
  constainer: {
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginVertical: 10,
  },
  socialMedia: {
    alignItems: 'flex-end',
    marginTop: 70,
  },
  socialIcons: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  btnView: {
    backgroundColor: '#00a1ff',
    width: width - 80,
    borderRadius: 10,
    marginTop: 30,
  },
});
