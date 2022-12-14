// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import LoginScreen from "./screens/LoginScreen";
// import MainScreen from "./screens/MainScreen";
// import DetailScreen from "./screens/DetailScreen";

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{headerShown:false}} 
//         />
//         <Stack.Screen
//           name="Main"
//           component={MainScreen}
//           options={{headerShown:false}} 
//         />
//         <Stack.Screen
//           name="Detail"
//           component={DetailScreen}
//           options={{headerShown:false}} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import DetailScreen from './src/screens/DetailScreen'
import Logo from './src/components/Logo';
import WebPage from './src/components/WebPage';

const AppNavigator = createStackNavigator(
  {
    LoginScreen,
    HomeScreen,
    DetailScreen,
    WebPage,
  },
  {
    defaultNavigationOptions: {
      headerTitle: () => <Logo />,
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTintColor: '#e71a24',
    },
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
  },
);

export default createAppContainer(AppNavigator);