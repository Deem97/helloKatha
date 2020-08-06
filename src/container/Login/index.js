/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */

import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import {globalStyle} from '../../utility';
import {Logo, InputField} from '../../components';
import {Store} from '../../context/store';
import {LOADING_START, LOADING_STOP} from '../../context/actions/types';
import {setAsyncStorage, keys} from '../../asyncStorage';
import {setUniqueValue, keyboardVerticalOffset} from '../../utility/constants';
import {LoginRequest} from '../../network';

const Login = ({navigation}) => {
  const globalState = useContext(Store);
  const {dispatchLoaderAction} = globalState;
  const [credential, setCredential] = useState({
    email: '',
    password: '',
  });

  const [logo, toggleLogo] = useState(true);
  const {email, password} = credential;

  const setInitialState = () => {
    setCredential({email: '', password: ''});
  };

  const handleOnChange = (name, value) => {
    setCredential({
      ...credential,
      [name]: value,
    });
  };

  const onLoginPress = () => {
    Keyboard.dismiss();
    if (!email) {
      alert('Email is Required');
    } else if (!password) {
      alert('Password is Required');
    } else {
      dispatchLoaderAction({
        type: LOADING_START,
      });
      LoginRequest(email, password)
        .then((res) => {
          if (!res.additionalUserInfo) {
            dispatchLoaderAction({
              type: LOADING_STOP,
            });
            alert(res);
            return;
          }
          setAsyncStorage(keys.uuid, res.user.uid);
          setUniqueValue(res.user.uid);
          dispatchLoaderAction({
            type: LOADING_STOP,
          });
          //setInitialState();
          navigation.navigate('Dashboard');
        })
        .catch((err) => {
          dispatchLoaderAction({
            type: LOADING_STOP,
          });
          alert(err);
        });
    }
  };
  // * ON INPUT FOCUS

  const handleFocus = () => {
    setTimeout(() => {
      toggleLogo(false);
    }, 200);
  };
  // * ON INPUT BLUR

  const handleBlur = () => {
    setTimeout(() => {
      toggleLogo(true);
    }, 200);
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={keyboardVerticalOffset}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={[globalStyle.flex1]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={[globalStyle.flex1]}>
          {logo && (
            <View style={{marginTop: 42, alignItems: 'center'}}>
              <Logo />
            </View>
          )}
          <View style={[globalStyle.flex2, globalStyle.containerCentered]}>
            <InputField
              placeholder="Email"
              value={email}
              onChangeText={(text) => handleOnChange('email', text)}
              onFocus={() => handleFocus()}
              onBlur={() => handleBlur()}></InputField>
            <InputField
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => handleOnChange('password', text)}
              onFocus={() => handleFocus()}
              onBlur={() => handleBlur()}></InputField>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
