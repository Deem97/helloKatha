/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */

import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {globalStyle} from '../../utility';
import {Logo, InputField} from '../../components';

const Register = ({navigation}) => {
  const [credentials, setCredentials] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const {userName, email, password, confirmPassword} = credentials;

  const onRegisterPress = () => {
    if (!userName) {
      alert('User Name is Required');
    } else if (!email) {
      alert('Email is Required');
    } else if (!password) {
      alert('Password is Required');
    } else if (password !== confirmPassword) {
      alert('Password did not Match');
    } else {
      alert(JSON.stringify(credentials));
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
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <InputField
          placeholder="User Name"
          value={userName}
          onChangeText={(text) =>
            handleOnChange('userName', text)
          }></InputField>
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
        <InputField
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) =>
            handleOnChange('confirmPassword', text)
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
            onPress={() => onRegisterPress()}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <Text style={{marginTop: 12}}>
          Already have an Account?
          <Text> </Text>
          <Text
            style={{color: '#6b8e23', fontSize: 16, fontWeight: '700'}}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;
