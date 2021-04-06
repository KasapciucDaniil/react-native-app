import React from 'react'
import { View, Text ,StyleSheet, Button, Alert } from 'react-native'

export const Video = ({navigation}) => {
  const videoHandler = () => {
    Alert.alert('This function does not work!')
  }

  const goToAuth = () => {
    navigation.navigate('Auth')
    Alert.alert('You are logged out!')
  } 

  return (
    <View style={styles.container}>
      <View>
        <Button title="Record" color="purple" onPress={videoHandler} />
      </View>
      <Text>or</Text>
      <View>
        <Button title="Logout" onPress={goToAuth} color="red" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
