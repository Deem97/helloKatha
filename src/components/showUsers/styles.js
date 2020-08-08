import {StyleSheet} from 'react-native';
import {color} from '../../utility';

export default StyleSheet.create({
  cardStyle: {
    marginHorizontal:12,
    marginBottom:12,
    borderRadius:30
  },
  cardItemStyle: {
    backgroundColor: '#dce775',
  },

  logoContainer: {
    marginTop:5,
    marginLeft:10,
    height: 60,
    width: 60,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#93e5b6',
  },
  thumbnailName: {fontSize: 30, color: '#FFFFFF', fontWeight: 'bold'},
  profileName: {fontSize: 20, color: '#000000', fontWeight: 'bold',marginLeft:10},
});
