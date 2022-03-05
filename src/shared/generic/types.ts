import { colors, shadows } from 'generic/themes'

export type Color = keyof typeof colors
export type Shadows = keyof typeof shadows

export type ThemeColor = {
  primary: string
  background: string
  card: string
  text: string
  border: string
  notification: string
} & {
  [key in string]: string
}
// хук useTheme ругается если расширять на кокретные цвета,
// мэйби в будущем пофиксят
// & {
//   [key in Color]: string
// }

export type Theme = {
  dark: boolean
  colors: ThemeColor
}
