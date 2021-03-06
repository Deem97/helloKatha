import React from 'react';
import {View, Text, Image} from 'react-native';
//import { Card, CardItem } from "native-base";
import {deviceWidth} from '../../utility/styleHelper/appStyle';
import {uuid} from '../../utility/constants';
import styles from './styles';
import {color} from '../../utility';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ChatBox = ({userId, msg, img, onImgTap}) => {
  let isCurrentUser = userId === uuid ? true : false;
  return (
    <View
      transparent
      style={{
        maxWidth: deviceWidth / 2 + 10,
        alignSelf: isCurrentUser ? 'flex-end' : 'flex-start',
      }}>
      <View
        style={[
          styles.chatContainer,
          isCurrentUser && {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 0,
            backgroundColor: '#e0e989',
          },
        ]}>
        {img ? (
          <View>
            <TouchableOpacity onPress={onImgTap}>
              <Image
                source={{uri: img}}
                resizeMode="cover"
                style={{height: 200, width: deviceWidth / 2}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={[styles.chatTxt, isCurrentUser && {color: '#000000'}]}>
            {msg}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ChatBox;
