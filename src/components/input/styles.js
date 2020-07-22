import {StyleSheet} from 'react-native';
import {appStyle} from '../../utility';

export default StyleSheet.create({
  input: {
    paddingLeft: 16,
    backgroundColor: '#6b8e23',
    width: '90%',
    color: 'black',
    height: 50,
    borderRadius: 40,
    alignSelf: 'center',
    marginVertical: appStyle.fieldMarginVertical,
    fontSize: 16,
  },
});
