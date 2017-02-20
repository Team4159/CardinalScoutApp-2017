import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 75
  },
  textBox: {
    height: 50,
    width: 250,
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'center',
    margin: 20,
    paddingLeft: 10
  },
  buttonContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  disabledButtons: {
    margin: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
    height: 70,
    width: 120,
    justifyContent: 'center',

  },
})
