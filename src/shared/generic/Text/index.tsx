import React, { useState } from 'react'
import {
  Text as RNText,
  TouchableOpacity,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from 'react-native'
import { Color, colors } from '../themes'
import { styles } from './styles'

interface TextProps extends RNTextProps {
  type?: keyof typeof styles
  error?: boolean
  center?: boolean
  color?: Color
  backgroundColor?: Color
  maxLength?: number
  style?: StyleProp<TextStyle>
}

export const Text: React.FC<TextProps> = ({
  children,
  type = 'st',
  error = false,
  center = false,
  color = 'black',
  backgroundColor,
  maxLength = type === 'h1' ? 30 : undefined,
  style,
  ...rest
}) => {
  const [showDots, setShowDots] = useState(true)

  const changeTextLength = () => {
    setShowDots((prev) => !prev)
  }

  const txt = String(children)

  const text =
    maxLength && showDots && txt?.length && txt.length > maxLength
      ? `${txt.slice(0, maxLength).trim()}...`
      : children

  const Content = () => (
    <RNText
      style={[
        styles[type],
        center && { textAlign: 'center' },
        { color: colors[color] },
        error && { color: colors.red },
        backgroundColor && { backgroundColor: backgroundColor },
        style,
      ]}
      {...rest}
    >
      {text}
    </RNText>
  )

  return maxLength && txt?.length > maxLength ? (
    <TouchableOpacity onPress={changeTextLength}>
      <Content />
    </TouchableOpacity>
  ) : (
    <Content />
  )
}
