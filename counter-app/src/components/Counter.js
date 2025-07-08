import { StyleSheet, Text, View, Pressable } from 'react-native'

const Counter = ({number, setNumber}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonStyle}>
        <Text style={styles.numberText} onPress={() => setNumber(prev => prev - 1)}>-</Text>
      </Pressable>

      <Text style={styles.numberText}>{number}</Text>

      <Pressable style={styles.buttonStyle}>
        <Text style={styles.numberText} onPress={() => setNumber(prev => prev + 1)}>+</Text>
      </Pressable>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    width: '100%',
  },  
  numberText: {
    fontSize: 50,
  },
  buttonStyle: {
    width: 40,
    alignItems: 'center'
  }
})