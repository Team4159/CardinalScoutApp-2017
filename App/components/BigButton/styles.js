import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';
export default StyleSheet.create({
  buttons: {
    backgroundColor: colors.buttonColor,
    width: 250,
    height: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 7
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  }
})
