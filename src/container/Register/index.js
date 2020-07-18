/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const Register = ({navigation}) => (
  <View>
    <Text onPress={() => navigation.navigate('Dashboard')}>Register</Text>
  </View>
);

export default Register;
