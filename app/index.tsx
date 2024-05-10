import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Aora!</Text>
      <StatusBar style='auto' />
      <Link href="/profile" style = {{color: 'blue'}}>Go to Profile</Link>
    </View>
  )
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     display:'flex',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   link: {
//     marginTop: 15,
//     paddingVertical: 15,
//   },
// });