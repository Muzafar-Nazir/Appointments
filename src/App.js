import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Signin from '../src/screens/Signin';
import Signup from '../src/screens/Signup';
import Dashboard from '../src/screens/Dashboard';
import Options from '../src/screens/Options';
import AddClinic from '../src/screens/Admin/AddClinic';
import {Provider as AuthProvider} from '../src/context/AuthContext';

const navigator = createStackNavigator(
  {
    Signin: Signin,
    Signup: Signup,
    Dashboard: Dashboard,
    Options: Options,
    AddClinic: AddClinic,
  },
  {
    initialRouteName: 'Options',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);
const App = createAppContainer(navigator);
export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
