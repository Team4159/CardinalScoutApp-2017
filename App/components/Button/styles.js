import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  buttons: {
    margin: 10,
    backgroundColor: colors.buttonColor,
    borderRadius: 5,
    height: 50,
    width: 100,
    justifyContent: 'center',

  },
  buttonText: {
    fontSize: 26,
    textAlign: 'center'
  }
})
