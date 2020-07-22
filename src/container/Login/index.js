/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const Login = ({navigation}) => (
  <SafeAreaView>
    <Text onPress={() => navigation.navigate('Register')}>Login</Text>
  </SafeAreaView>
);

export default Login;
