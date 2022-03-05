import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const BackArrow = (props: SvgProps) => {
  return (
    <Svg width="24" height="22" viewBox="0 0 24 24" fill="black" {...props}>
      <Path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </Svg>
  )
}
