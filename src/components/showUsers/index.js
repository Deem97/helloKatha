import React from 'react';
import {Text, TouchableOpacity,View,Image} from 'react-native';
//import {Card, CardItem, Left, Body, Thumbnail} from 'native-base';
//import {Card, CardItem, Left, Body, Thumbnail} from 'native-base';
import styles from './styles';

const ShowUsers = ({name, img, onImgTap, onNameTap}) => {
  return (
    
    <View style={styles.cardStyle}>
      <View style={styles.cardItemStyle}>
          <TouchableOpacity style={[styles.logoContainer]} onPress={onImgTap}>
            {img ? (
              <Image style={{height: 60,width: 60,borderRadius: 30,}} source={{ uri: img }} resizeMode="cover" />
            ) : (
              <Text style={styles.thumbnailName}>{name.charAt(0)}</Text>
            )}
          </TouchableOpacity>
            <Text style={styles.profileName} onPress={onNameTap}>
              {name}
            </Text>
      </View>
    </View>
  );
};

export default ShowUsers;
