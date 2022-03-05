import React from 'react'
import { FlatList, View } from 'react-native'
import { HomeProps } from 'navigation/types'
import { Button } from 'generic/Button'
import { margins } from 'generic/styles'

interface ItemProps {
  onPress: () => void
  DetailId: string
}

const Item = ({ onPress, DetailId }: ItemProps) => {
  return (
    <View style={[margins.v10, margins.h20]}>
      <Button onPress={onPress}>Go to Details {DetailId}</Button>
    </View>
  )
}

const HomeScreen: React.FC<HomeProps<'HOME_PATH'>> = ({ navigation }) => {
  const goToDetails = (DetailId: string) =>
    navigation.navigate('DETAIL_PATH', { DetailId })

  const data = [
    { DetailId: '1' },
    { DetailId: '2' },
    { DetailId: '3' },
    { DetailId: '4' },
    { DetailId: '5' },
    { DetailId: '6' },
    { DetailId: '7' },
    { DetailId: '8' },
    { DetailId: '9' },
    { DetailId: '10' },
    { DetailId: '11' },
    { DetailId: '12' },
    { DetailId: '13' },
    { DetailId: '14' },
    { DetailId: '15' },
  ]

  return (
    // <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={[{ flex: 1 }]}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item
            onPress={() => goToDetails(item.DetailId)}
            DetailId={item.DetailId}
          />
        )}
      />
    </View>
    // </ScrollView>
  )
}

export default HomeScreen
