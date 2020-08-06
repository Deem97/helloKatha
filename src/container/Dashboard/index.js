/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState, useLayoutEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {UpdateUser, LogOutUser} from '../../network';
import {clearAsyncStorage} from '../../asyncStorage';

const Dashboard = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="ios-cart"
          size={26}
          color="white"
          style={{right: 10}}
          onPress={() =>
            Alert.alert(
              'Logout',
              'Are you sure to Logout?',
              [
                {
                  text: 'Yes',
                  onPress: () => logout(),
                },
                {
                  text: 'No',
                },
              ],
              {
                cancelable: false,
              },
            )
          }
        />
      ),
    });
  }, [navigation]);
  const logout = () => {
    LogOutUser()
      .then(() => {
        clearAsyncStorage()
          .then(() => {
            navigation.replace('Login');
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => alert(err));
  };
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>17000254 - Deemantha H.K.T</Text>
    </View>
  );
};

export default Dashboard;
