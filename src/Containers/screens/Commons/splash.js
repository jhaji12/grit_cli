import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native'

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('EducatorOrStudent') //this.props.navigation.navigate('Login')
  }, 5000)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Image
          source={require('../../../Assets/Images/logo.png')}
          style={{ width: 190, height: 190, marginTop: 0 }}
        />
      </View>
      <Text
        style={{
          marginTop: 0,
          color: '#267900',
          fontSize: 35,
          fontWeight: 'bold',
          fontFamily: 'Roboto',marginTop:10
        }}
      >
        GR
        <Text
          style={{
            marginTop: 0,
            color: '#FF6E15',
            fontSize: 35,
            fontWeight: 'bold',
            fontFamily: 'Roboto',
          }}
        >
          IT
        </Text>
        <Text
          style={{
            marginTop: 0,
            paddingLeft: 50,
            color: '#00C5E4',
            fontSize: 35,
            fontWeight: 'bold',
            fontFamily: 'Roboto',
          }}
        >
          Studies
        </Text>
      </Text>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 700,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Splash
