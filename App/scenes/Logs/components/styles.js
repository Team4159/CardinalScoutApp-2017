import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container:{
    paddingTop: 50
  },
  contain: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
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
    alignSelf: 'center',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
})
