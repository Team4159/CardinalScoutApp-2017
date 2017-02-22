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

BigButton.propTypes = {
  text: React.PropTypes.string,
  onPress: React.PropTypes.func,
};

BigButton.defaultProps = {
  text: "big button",
  // eslint-disable-next-line no-console
  onPress: () => console.log("a long button is pressed"),
};

export default BigButton;
