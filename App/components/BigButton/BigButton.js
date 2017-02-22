import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const BigButton = (props) => {
  const { text, onPress, style, textStyle } = props;
  return(
    <TouchableOpacity onPress={onPress} style={[styles.buttons, style]}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
 )
}


BigButton.defaultProps = {
  text: "big button",
};

export default BigButton;
