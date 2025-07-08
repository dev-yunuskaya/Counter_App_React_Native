import { StyleSheet, Text, View } from 'react-native'
import Counter from '../components/Counter'
import CustomButton from '../components/CustomButton'
import { useState } from 'react'

const CounterScreen = () => {
  const [number, setNumber] = useState(0)

  return (
    <View style={styles.container}>
      <Counter number={number} setNumber={setNumber}/>
      <CustomButton onPress={() => {setNumber(0)}}/>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  }
})