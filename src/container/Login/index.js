/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const Login = ({navigation}) => (
  <View>
    <Text onPress={() => navigation.navigate('Register')}>Login</Text>
  </View>
);

export default Login;
