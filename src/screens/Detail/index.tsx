import React, { useEffect } from 'react'
import { View, Linking } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { HomeProps } from 'navigation/types'
import { Button } from 'generic/Button'
import { margins, paddings } from 'generic/styles'
import { Text } from 'generic/Text'

const DetailScreen: React.FC<HomeProps<'DETAIL_PATH'>> = ({
  navigation,
  route: { params },
}) => {
  const { DetailId } = params

  useEffect(() => {
    navigation.setOptions({ title: `Detail ${DetailId} Screen` })
  }, [DetailId, navigation])

  const Item = ({ url }: { url: string }) => (
    <View style={margins.v15}>
      <Text>{url}</Text>
      <Button onPress={() => Linking.openURL(url)}>Go to waze</Button>
    </View>
  )

  return (
    <ScrollView contentContainerStyle={[{ flexGrow: 1 }, paddings.h20]}>
      <Item
        url={
          'https://ul.waze.com/ul?ll=56.82860001%2C60.60015188&navigate=yes&zoom=17&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location'
        }
      />
      {/*<Item url={'https://waze.com/ul?q=moscow'} />*/}
      {/*<Item url={'https://www.waze.com/ul?q=space%20moscow&navigate=yes'} />*/}
      <Item
        url={
          'https://www.waze.com/ul?q=yekaterinburg%20street%20malysheva,100&navigate=yes'
        }
      />
      <Item url={'https://www.waze.com/ul?q=malysheva%20100&navigate=yes'} />
      <Item url={'https://www.waze.com/ul?q=malysheva%20100'} />
      <Item
        url={
          'https://waze.com/ul?q=екатеринбург%20улица%20малышева%20дом%20100'
        }
      />
      <Item
        url={'https://waze.com/ul?q=100%20улица%20малышева%20екатеринбург'}
      />
      <Item url={'https://waze.com/ul?q=екатеринбург%20ул.Малышева%20д.100'} />
      <Item
        url={
          'https://www.waze.com/ru/live-map/directions/russia/sverdlovskaya-oblast/yekaterinburg/ulitsa-malysheva,-100?utm_source=waze_website&utm_campaign=waze_website&utm_medium=website_menu&to=place.ChIJZf_h6vZuwUMRzvp_HXMidnE'
        }
      />
    </ScrollView>
  )
}

export default DetailScreen
