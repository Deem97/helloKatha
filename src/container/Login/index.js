/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {globalStyle} from '../../utility';
import {Logo, InputField} from '../../components';

const Login = ({navigation}) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const {email, password} = credentials;

  return (
    <SafeAreaView style={[globalStyle.flex1, {backgroundColor: '#B8E986'}]}>
      <View style={[globalStyle.flex2, globalStyle.containerCentered]}>
        <InputField placeholder="Enter Email" value={email}></InputField>
        <InputField
          placeholder="Enter Password"
          secureTextEntry={true}
          value={password}></InputField>
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
          <Text style={{color: '#FFF', fontSize: 16, fontWeight: '700'}}>
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
