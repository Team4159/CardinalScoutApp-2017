import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const SmallButton = ({ onPress, text, disabled, style, textStyle }) =>(
  <TouchableOpacity style={[styles.buttons, style]} onPress={onPress} disabled={disabled}>
    <Text style={[styles.buttonText, textStyle]}>{text}</Text>
  </TouchableOpacity>
)

SmallButton.defaultProps = {
  text: "small button",
  disabled: false,
};

export default SmallButton;
