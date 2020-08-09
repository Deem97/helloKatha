import {StyleSheet} from 'react-native';
import {color} from '../../utility';

export default StyleSheet.create({
  cardStyle: {
    marginHorizontal: 12,
    marginBottom: 12,
    height: 60,
  },
  cardItemStyle: {
    backgroundColor: '#dce775',
  },

  logoContainer: {
    marginTop: 6,
    marginLeft: 10,
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
  profileName: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 150,
    marginTop: -20,
  },
});
