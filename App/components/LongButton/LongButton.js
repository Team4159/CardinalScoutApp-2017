import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
const LongButton = (props) => {
  const { text, onPress, style } = props;
  return(
  <TouchableOpacity onPress={onPress} style={styles.buttons}>
    <Text style={[styles.buttonText, style]}>{text}</Text>
  </TouchableOpacity>
 )
}

LongButton.propTypes = {
  text: React.PropTypes.string,
  onPress: React.PropTypes.func,
};

LongButton.defaultProps = {
  text: "a Long Button",
  // eslint-disable-next-line no-console
  onPress: () => console.log("a long button is pressed"),
};

export default LongButton;
