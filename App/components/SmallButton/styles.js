import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  buttons: {
    backgroundColor: colors.buttonColor,
    height: 40,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 5,
    borderRadius: 7
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  }
})
