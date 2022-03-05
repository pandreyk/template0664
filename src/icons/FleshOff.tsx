import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const FleshOff = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="tomato" {...props}>
      <Path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 19l1.5-5h-4.5l7-9-1.5 5h4.5l-7 9z" />
    </Svg>
  )
}
