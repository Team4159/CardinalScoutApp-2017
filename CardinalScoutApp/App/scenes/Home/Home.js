import React from 'react'
import {View, Text} from 'react-native'
import LongButton from '../../Components/LongButton'
import styles from './styles'
const Home = () =>(
  <View style={styles.container}>
    <Text style = {styles.text}>Cardinal Scout App</Text>
    <LongButton text='Match Scout'/>
    <LongButton text='Logs'/>
    <LongButton text='Settings'/>
  </View>
)
export default Home;
