import React, {useState} from 'react';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContect] = useState('');

  return (
    <ScrollView>
      <View style={styles.constainer}>
        <View style={styles.firstContainer}>
          <Text style={styles.signin}>Sign up</Text>
        </View>
        <View style={styles.emailInputView}>
          <InputText
            name="First Name"
            value={firstName}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={newFirstName => setFirstName(newFirstName)}
          />
        </View>

        <View style={styles.emailInputView}>
          <InputText
            name="Last Name"
            value={lastName}
            onChangeText={setLastName}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.emailInputView}>
          <InputText
            autoCapitalize="none"
            autoCorrect={false}
            name="Conact Number"
            value={contact}
            onChangeText={setContect}
          />
        </View>

        <View style={styles.emailInputView}>
          <InputText
            name="Email"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.emailInputView}>
          <InputText
            autoCapitalize="none"
            autoCorrect={false}
            name="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.emailInputView}>
          <InputText
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            name="Confirm Password"
          />
        </View>
        <View style={styles.btnView}>
          <Btn onPress={() => navigation.navigate('Signin')} text="Signinup" />
        </View>
      </View>
    </ScrollView>
  );
};

// Signup.navigationOptions = ()=>{
//   return{
//     headerShown: false,
//   }
// }

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
    marginTop: 30,
  },
});
