import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
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
  row:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 20
  },
  disabledButton: {
    backgroundColor: 'grey',
    height: 40,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 5
  },
  button: {
    backgroundColor: '#8b0000',
    width: 250,
    height: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 7
  },
  text: {
    fontSize: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
  counterButton: {
    backgroundColor: '#8b0000',
    height: 40,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 5
  },
  rowText: {
    fontSize: 20
  },
  counterText: {
    fontSize: 20,
    color: '#ffffff'
  }
})
