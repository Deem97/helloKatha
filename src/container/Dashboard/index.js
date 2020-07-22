/* eslint-disable prettier/prettier */
import React, {useLayoutEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Dashboard = ({navigation}) => {
  useLayoutEffect(
    () => {
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
                    onPress: () => alert('Logged Out'),
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
    },
    {navigation},
  );
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;
