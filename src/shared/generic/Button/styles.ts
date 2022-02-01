import { ScaledSheet } from 'react-native-size-matters'
import { colors } from '../themes'

export const styles = ScaledSheet.create({
  touchable: {
    backgroundColor: colors.primary,
    alignSelf: 'stretch',
    overflow: 'hidden',
    borderRadius: '6@ms',
  },
  text: {
    color: colors.white,
    paddingVertical: '8@mvs',
    paddingHorizontal: '12@ms',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'stretch',
    fontSize: '16@ms',
    borderRadius: '6@ms',
  },
})
