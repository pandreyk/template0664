import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const Home = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <Path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
    </Svg>
  )
}
