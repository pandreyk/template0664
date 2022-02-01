import React from 'react'
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
  return (
    <TouchableOpacity
      activeOpacity={0.8}
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
          color && { color: colors[color] },
          disabled && { opacity: 0.7 },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}
