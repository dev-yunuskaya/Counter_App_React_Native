import { Pressable, StyleSheet, Text, View } from 'react-native'

const CustomButton = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonStyle} onPress={onPress}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center'
  },
  buttonStyle: {
    width: 100,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})