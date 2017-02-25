import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container:{
    paddingTop: 50
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',

  },
  row:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  text:{
    marginLeft: 12,
   fontSize: 25,
  },
  textBox: {
    height: 20,
    width: 200,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 15,
    fontSize: 20,
    alignSelf: 'flex-end',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
})
