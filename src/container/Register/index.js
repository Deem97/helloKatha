/* eslint-disable handle-callback-err */
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
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import firebase from '../../firebase/config';
import {globalStyle} from '../../utility';
import {Logo, InputField} from '../../components';
import {Store} from '../../context/store';
import {LOADING_START, LOADING_STOP} from '../../context/actions/types';
import {setAsyncStorage, keys} from '../../asyncStorage';
import {setUniqueValue, keyboardVerticalOffset} from '../../utility/constants';
import {SignUpRequest, AddUser} from '../../network';

const Register = ({navigation}) => {
  const globalState = useContext(Store);
  const {dispatchLoaderAction} = globalState;
  const [credentials, setCredentials] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [logo, toggleLogo] = useState(true);
  const {userName, email, password, confirmPassword} = credentials;

  const onRegisterPress = () => {
    Keyboard.dismiss();
    if (!userName) {
      alert('User Name is Required');
    } else if (!email) {
      alert('Email is Required');
    } else if (!password) {
      alert('Password is Required');
    } else if (password !== confirmPassword) {
      alert('Password did not Match');
    } else {
      dispatchLoaderAction({
        type: LOADING_START,
      });
      SignUpRequest(email, password)
        .then((res) => {
          if (!res.additionalUserInfo) {
            dispatchLoaderAction({
              type: LOADING_STOP,
            });
            alert(res);
            return;
          }
          let uid = firebase.auth().currentUser.uid;
          let profileImg = '';
          AddUser(userName, email, uid, profileImg)
            .then(() => {
              setAsyncStorage(keys.uuid, uid);
              setUniqueValue(uid);
              dispatchLoaderAction({
                type: LOADING_STOP,
              });
              navigation.replace('Dashboard');
            })
            .catch((err) => {
              dispatchLoaderAction({
                type: LOADING_STOP,
              });
              alert(err);
            });
        })
        .catch((err) => {
          dispatchLoaderAction({
            type: LOADING_STOP,
          });
          alert(err);
        });
    }
  };

  const handleOnChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
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
          <View style={{marginTop: 20, alignItems: 'center'}}>
            <InputField
              placeholder="User Name"
              value={userName}
              onChangeText={(text) => handleOnChange('userName', text)}
              onFocus={() => handleFocus()}
              onBlur={() => handleBlur()}></InputField>
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
            <InputField
              placeholder="Confirm Password"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={(text) => handleOnChange('confirmPassword', text)}
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;
