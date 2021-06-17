import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  GetStarted,
  Register,
  Login,
  UploadPhoto,
  Home,
  Messages,
  LBH,
  PilihKonsultan,
  Chat,
  UserProfile,
  ProfileKonsultan,
  EditProfile,
  Jaksel,
  Jakpus,
  Jakbar,
  Jaktim,
} from './../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="LBH" component={LBH} />
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PilihKonsultan"
        component={PilihKonsultan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileKonsultan"
        component={ProfileKonsultan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Jaksel"
        component={Jaksel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Jakpus"
        component={Jakpus}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Jakbar"
        component={Jakbar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Jaktim"
        component={Jaktim}
        options={{headerShown: false}}
      />
      <Stack.Screen name="LBH" component={LBH} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default Router;
