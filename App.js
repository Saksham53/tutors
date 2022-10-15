import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, {useEffect, useState} from 'react';
import {firebase} from './config';

import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './src/LoginScreen';
import SignUpStudent from './src/SignUpStudent';
import Dashboard from './src/Dashboard';
import Header from './components/Header';
import SignUpTutor from './src/SignUpTutor'


const Stack = createStackNavigator();

function App(){

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] =useState();

  function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(()=>{
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[]);

  if (initializing) return null;

  if(!user){
    return(
    <Stack.Navigator>
      <Stack.Screen 
      name="Login"
      component={LoginScreen}
      options={{
        headerTitle: ()=> <Header name = "Header" />,
        headerStyle:{
          height:40,
          backgroundColor: '#fff',
          // margin:30
        }
      }}/>

<Stack.Screen 
      name="SignUpScreen"
      component={SignUpStudent}
      options={{
        headerTitle: ()=> <Header name = "SignUp" />,
        headerStyle:{
          height:20,
          backgroundColor: '#fff'
        }
      }}/>

<Stack.Screen 
      name="SignUpTutor"
      component={SignUpTutor}
      options={{
        headerTitle: ()=> <Header name = "SignUp" />,
        headerStyle:{
          height:20,
          backgroundColor: '#fff'
        }
      }}/>
    </Stack.Navigator>
    )
  }

return(
  <Stack.Navigator >
    <Stack.Screen 
      name="Dashboard"
      component={Dashboard}
      options={{
        headerTitle: ()=> <Header name = "Dashboard" />,
        headerStyle:{
          height:20,
          backgroundColor: '#00e4d0'
        }
      }}/>
  </Stack.Navigator>
)

}

export default () =>{
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>

  )
}
  
  