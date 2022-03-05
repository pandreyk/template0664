export const colors = {
  primary: '#97BE0D',
  primaryLight: '#EEF5E3',
  secondary: '#0c3bd3',
  secondaryLight: '#8495da',
  third: '#be9d17',
  thirdLight: '#d2c27f',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#5d5d5d',
  red: '#e36363',
  transparent: 'transparent',
}

export const shadows = {
  hover: '0px 15px 25px -5px rgba(darken(black, 40%))',
  active: '0px 15px 25px -5px rgba(darken(black, 40%))',
}

export type Color = keyof typeof colors
export type Shadows = keyof typeof shadows
