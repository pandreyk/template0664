import React from 'react'
import { View } from 'react-native'
import { HomeProps } from 'navigation/types'
import { Button } from 'generic/Button'

const HomeScreen: React.FC<HomeProps<'HOME_PATH'>> = ({ navigation }) => {
  const goToDetails = (DetailId: string) =>
    navigation.navigate('DETAIL_PATH', { DetailId })

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ margin: 10 }}>
        <Button onPress={() => goToDetails('1')}>Go to Details 1</Button>
      </View>
      <View style={{ margin: 10 }}>
        <Button onPress={() => goToDetails('2')} backgroundColor={'secondary'}>
          Go to Details 2
        </Button>
      </View>
      <View style={{ margin: 10 }}>
        <Button onPress={() => goToDetails('3')} backgroundColor={'third'}>
          Go to Details 3
        </Button>
      </View>
    </View>
  )
}

export default HomeScreen
