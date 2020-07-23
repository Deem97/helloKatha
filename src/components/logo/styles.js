/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable quotes */

import {StyleSheet} from 'react-native';
import {color, appStyle} from '../../utility';
import {smallDeviceHeight} from '../../utility/constants';

const getDimensions = () => {
  if (appStyle.deviceHeight > smallDeviceHeight) {
    return {
      height: 150,
      width: 150,
      borderRadius: 50,
      logoFontSize: 90,
    };
  } else {
    return {
      height: 120,
      width: 120,
      borderRadius: 40,
      logoFontSize: 70,
    };
  }
};

export default StyleSheet.create({
  logo: {
    height: getDimensions().height,
    width: getDimensions().width,
    borderRadius: getDimensions().borderRadius,
    backgroundColor: '#6b8e23',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
