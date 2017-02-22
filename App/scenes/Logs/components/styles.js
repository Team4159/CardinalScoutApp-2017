import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container:{
    alignItems: 'center',
    padding: 75
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',

  },
  row:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  textBox: {
    height: 20,
    width: 250,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 15,
    fontSize: 20
  }
})
