import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from '../../Containers/SignUp/node_modules/App/Theme'

export default StyleSheet.create({
  buttonPrimary: {
    backgroundColor: Colors.white,
    borderRadius: 100,
    marginBottom: Metrics.tiny,
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
  },
  buttonSecondary: {
    backgroundColor: Colors.white,
    borderRadius: 100,
    marginBottom: Metrics.tiny,
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
  },
  buttonLink: {
    backgroundColor: Colors.transparent,
    borderRadius: 100,
    marginBottom: Metrics.tiny,
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
  },
  group: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrimary: {
    ...Fonts.normal,
    color: Colors.primary,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 19,
  },
  textSecondary: {
    ...Fonts.normal,
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 19,
  },
  textLink: {
    ...Fonts.medium,
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 19,
  }
})