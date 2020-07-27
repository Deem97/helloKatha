/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */

import React, {useState, useContext} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {globalStyle} from '../../utility';
import {Logo, InputField} from '../../components';
import {Store} from '../../context/store';
import {LOADING_START, LOADING_STOP } from '../../context/actions/types';

const Login = ({navigation}) => {
  const globalState = useContext(Store);
  const {dispatchLoaderAction} = globalState;
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const {email, password} = credentials;

  const onLoginPress = () => {
    if (!email) {
      alert('Email is Required');
    } else if (!password) {
      alert('Password is Required');
    } else {
      dispatchLoaderAction({
        type: LOADING_START,
      });
      setTimeout(() => {
        dispatchLoaderAction({
          type: LOADING_STOP,
        });
      }, 2000);
    }
  };

  const handleOnChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <SafeAreaView style={[globalStyle.flex1]}>
      <View style={{marginTop: 42, alignItems: 'center'}}>
        <Logo />
      </View>
      <View style={[globalStyle.flex2, globalStyle.containerCentered]}>
        <InputField
          placeholder="Email"
          value={email}
          onChangeText={(text) => handleOnChange('email', text)}></InputField>
        <InputField
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) =>
            handleOnChange('password', text)
          }></InputField>
        <TouchableOpacity
          style={{
            marginTop: 22,
            width: 160,
            backgroundColor: '#6b8e23',
            borderRadius: 40,
            height: 52,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{color: '#FFFFFF', fontSize: 16, fontWeight: '700'}}
            onPress={() => onLoginPress()}>
            Sign In
          </Text>
        </TouchableOpacity>

        <Text style={{marginTop: 12}}>
          Don't have an Account?
          <Text> </Text>
          <Text
            style={{color: '#6b8e23', fontSize: 16, fontWeight: '700'}}
            onPress={() => navigation.navigate('Register')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
