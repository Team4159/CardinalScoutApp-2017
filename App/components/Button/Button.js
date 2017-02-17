import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
const Button = ({ onPress, text, disabled, style }) =>(
  <TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
)
Button.defaultProps = {
  text: "a Button",
  disabled: false,
  style: styles.buttons,
};
export default Button;
