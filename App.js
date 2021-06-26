/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {CustomHeader, CustomDrawerContent} from './src';
import {
  ClassScreen,
  AdminScreen,
  AccountScreen,
  ScheduleScreen,
  SettingScreen,
  TryoutScreen,
  ClassDetailScreen,
  CreateScreen,
  JoinScreen,
} from './src/tab';
import {NotificationsScreen} from './src/drawer';
import {RegisterScreen, LoginScreen} from './src/auth';
import {IMAGE} from './src/constants/Image';
// import * as firebase from 'firebase';
// import {firebaseConfig} from './config';
import LoadingScreen from './src/auth/LoadingScreen';
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const Tab = createBottomTabNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});

const StackClass = createStackNavigator();
function ClassStack() {
  return (
    <StackClass.Navigator initialRouteName="ClassScreen">
      <StackClass.Screen
        name="ClassScreen"
        component={ClassScreen}
        options={navOptionHandler}
      />
      <StackClass.Screen
        name="ClassDetail"
        component={ClassDetailScreen}
        options={navOptionHandler}
      />
      <StackClass.Screen
        name="JoinClass"
        component={JoinScreen}
        options={navOptionHandler}
      />
      <StackClass.Screen
        name="CreateClass"
        component={CreateScreen}
        options={navOptionHandler}
      />
    </StackClass.Navigator>
  );
}

// const StackAdmin = createStackNavigator();
// function AdminStack() {
//   return (
//     <StackAdmin.Navigator>
//       <StackAdmin.Screen
//         name="Admin"
//         component={AdminScreen}
//         options={navOptionHandler}
//       />
//       <StackAdmin.Screen
//         name="SettingDetail"
//         component={SettingsScreenDetail}
//         options={navOptionHandler}
//       />
//     </StackAdmin.Navigator>
//   );
// }

// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? IMAGE.ICON_HOME : IMAGE.ICON_HOME_BLACK;
//           } else if (route.name === 'Settings') {
//             iconName = focused ? IMAGE.ICON_SETTING : IMAGE.ICON_SETTING_BLACK;
//           }

//           // You can return any component that you like here!
//           return (
//             <Image
//               source={iconName}
//               style={{width: 20, height: 20}}
//               resizeMode="contain"
//             />
//           );
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       }}>
//       <Tab.Screen name="Home" component={HomeStack} />
//       <Tab.Screen name="Settings" component={SettingStack} />
//     </Tab.Navigator>
//   );
// }
const Drawer = createDrawerNavigator();

function AdminNavigator({navigation}) {
  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawerContent navigation={navigation} />}
      initialRouteName={'Admin'}>
      <Drawer.Screen name="Admin" component={AdminScreen} />
      <Drawer.Screen name="Class" component={ClassStack} />
      <Drawer.Screen name="Schedule" component={ScheduleScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
      <Drawer.Screen name="Tryout" component={TryoutScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
function UserNavigator({navigation}) {
  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawerContent navigation={navigation} />}
      initialRouteName={'Class'}>
      <Drawer.Screen name="Class" component={ClassStack} />
      <Drawer.Screen name="Schedule" component={ScheduleScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
      <Drawer.Screen name="Tryout" component={TryoutScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Join" component={JoinScreen} />
      <Drawer.Screen name="Create" component={CreateScreen} />
    </Drawer.Navigator>
  );
}

const StackApp = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen
          name="HomeApp"
          component={UserNavigator}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Admin"
          component={AdminNavigator}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Loading"
          component={LoadingScreen}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Login"
          component={LoginScreen}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Register"
          component={RegisterScreen}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
