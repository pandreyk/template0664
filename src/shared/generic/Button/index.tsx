import React, { useState } from 'react'
import { StyleProp, Text, ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Color, colors } from 'generic/themes'
import { styles } from './styles'

interface ButtonProps {
  onPress: () => void
  disabled?: boolean
  color?: Color
  backgroundColor?: Color
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip'
  numberOfLines?: number
  style?: StyleProp<ViewStyle>
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onPress,
  color,
  backgroundColor,
  ellipsizeMode = 'tail',
  numberOfLines,
  style,
}) => {
  const [pressed, setPressed] = useState<boolean>(false)
  const onPressIn = () => setPressed(true)
  const onPressOut = () => setPressed(false)

  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeOpacity={1}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.touchable,
        backgroundColor && { backgroundColor: colors[backgroundColor] },
        style,
      ]}
    >
      <Text
        ellipsizeMode={ellipsizeMode}
        numberOfLines={numberOfLines}
        style={[
          styles.text,
          pressed && { opacity: 0.7 },
          color && { color: colors[color] },
          disabled && { opacity: 0.7 },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}
