import * as React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { configure } from 'mobx';
import { ThemeProvider } from 'react-native-elements';

import AuthAutoSignIn from './screens/Auth/AutoSignIn';
import AuthSignIn from './screens/Auth/SignIn';
import AuthSignUp from './screens/Auth/SignUp';

import MainIndex from './screens/Main/Index';

import DemoIndex from './screens/Demo/Index';
import DemoLayout1 from './screens/Demo/Layout1';
import DemoLayout2 from './screens/Demo/Layout2';

configure({ enforceActions: 'always' });

const AuthStack = createStackNavigator(
  {
    AuthAutoSignIn: { screen: AuthAutoSignIn },
    AuthSignIn: { screen: AuthSignIn },
    AuthSignUp: { screen: AuthSignUp },
  },
  {
    initialRouteName: 'AuthAutoSignIn',
    headerMode: 'none',
  },
);

const MainStack = createStackNavigator(
  {
    MainIndex: { screen: MainIndex },
  },
  {
    initialRouteName: 'MainIndex',
    headerMode: 'none',
  },
);

const DemoStack = createStackNavigator(
  {
    DemoIndex: { screen: DemoIndex },
    DemoLayout1: { screen: DemoLayout1 },
    DemoLayout2: { screen: DemoLayout2 },
  },
  {
    initialRouteName: 'DemoIndex',
    headerMode: 'none',
  },
);

const AppSwitch = createSwitchNavigator(
  {
    AuthStack,
    MainStack,
    DemoStack,
  },
  {
    initialRouteName: 'AuthStack',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppSwitch);

const App = () => (
  <ThemeProvider>
    <AppContainer />
  </ThemeProvider>
);

export default App;
