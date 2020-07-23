/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {globalStyle} from '../../utility';
import {Logo, InputField} from '../../components';

const Login = ({navigation}) => {
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
    <SafeAreaView style={[globalStyle.flex1, {backgroundColor: '#B8E986'}]}>
      <View style={[globalStyle.flex2, globalStyle.containerCentered]}>
        <InputField
          placeholder="Enter Email"
          value={email}
          onChangeText={(text) => handleOnChange('email', text)}></InputField>
        <InputField
          placeholder="Enter Password"
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
            style={{color: '#FFF', fontSize: 16, fontWeight: '700'}}
            onPress={() => onLoginPress()}>
            Sign In
          </Text>
        </TouchableOpacity>
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
            style={{color: '#FFF', fontSize: 16, fontWeight: '700'}}
            onPress={() => navigation.navigate('Register')}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
