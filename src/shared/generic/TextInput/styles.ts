import { ScaledSheet } from 'react-native-size-matters'
import { colors } from '../themes'

export const styles = ScaledSheet.create({
  label: {
    color: colors.black,
    fontSize: '16@ms',
  },
  input: {
    fontSize: '16@ms',
    borderRadius: '6@ms',
    borderWidth: '1@ms',
    borderColor: colors.third,
    alignSelf: 'stretch',
    paddingVertical: '6@mvs',
  },
})
