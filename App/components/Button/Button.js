import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
const Button = ({ onPress, text }) =>(
  <TouchableOpacity style={styles.buttons}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
)
Button.defaultProps = {
  text: "a Button",
  // eslint-disable-next-line no-console
  onPress: () => console.log("a button is pressed"),
};
export default Button;
