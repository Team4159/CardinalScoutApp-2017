import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
    paddingTop: 25,
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
  text: {
    fontSize: 16,
  },
  rowText: {
    fontSize: 20
  },
  counterText: {
    fontSize: 20,
    color: '#ffffff'
  }
})
