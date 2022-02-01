import React from 'react'
import { View, Button } from 'react-native'
import { HomeProps } from 'navigation/types'

const HomeScreen: React.FC<HomeProps<'HOME_PATH'>> = ({ navigation }) => {
  const goToDetails = (DetailId: string) =>
    navigation.navigate('DETAIL_PATH', { DetailId })

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ margin: 10 }}>
        <Button title="Go to Details 1" onPress={() => goToDetails('1')} />
      </View>
      <View style={{ margin: 10 }}>
        <Button title="Go to Details 2" onPress={() => goToDetails('2')} />
      </View>
      <View style={{ margin: 10 }}>
        <Button title="Go to Details 3" onPress={() => goToDetails('3')} />
      </View>
    </View>
  )
}

export default HomeScreen
