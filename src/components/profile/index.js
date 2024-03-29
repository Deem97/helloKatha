import React from 'react';
import {Image, View, Text, TextInput, InputField} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import {globalStyle, color} from '../../utility';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default ({img, name, onEditImgTap}) => (
  <View style={[globalStyle.sectionCentered, styles.container]}>
    <View style={styles.imgContainer}>
      <TouchableOpacity activeOpacity={0.8}>
        {img ? (
          <Image source={{uri: img}} style={styles.img} resizeMode="cover" />
        ) : (
          <View
            style={[
              globalStyle.sectionCentered,
              styles.img,
              {backgroundColor: '#93e5b8'},
            ]}>
            <Text style={styles.name}>{name.charAt(0)}</Text>
          </View>
        )}
      </TouchableOpacity>
      <View style={[globalStyle.sectionCentered, styles.editImgContainer]}>
        <FontAwesome5
          name="user-edit"
          size={20}
          onPress={onEditImgTap}
          color={color.WHITE}
        />
      </View>
    </View>
    <Text style={styles.welcome}>{name}</Text>
  </View>
);
