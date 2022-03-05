import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const Cards = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <Path d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 13.5c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-6.5h20v6.5zm0-9.5h-20v-1.5c0-.276.224-.5.5-.5h19c.276 0 .5.224.5.5v1.5zm-9 6h-9v-1h9v1zm-3 2h-6v-1h6v1zm10-2h-3v-1h3v1z" />
    </Svg>
  )
}
