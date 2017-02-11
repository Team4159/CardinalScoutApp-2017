import { StyleSheet } from 'react-native';
import { colors } from '../../Config/Styles';
export default StyleSheet.create({
  buttons: {
    margin: 10,
    backgroundColor: colors.buttonColor,
    height: 70,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center'
  }
})
