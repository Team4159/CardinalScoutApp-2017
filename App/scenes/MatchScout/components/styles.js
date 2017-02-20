import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    margin: 50
  },
  textBox: {
    height: 50,
    width: 250,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 15
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
  button: {
    backgroundColor: '#8b0000',
    width: 250,
    height: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    fontSize: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  }
})
