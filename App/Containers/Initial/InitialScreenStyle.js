import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  layout: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transparent,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex:-1,
  },
  button: {
    ...Metrics.smallHorizontalMargin,
    ...Metrics.smallVerticalMargin,
    ...Fonts.normal,
    width: 280,
    color: Colors.primary,
  },
  btnGroup: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    ...Fonts.normal,
    color: Colors.error,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -10,
  },
  logoContainer: {
    ...Helpers.fullWidth,
    alignItems: 'center',
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    height: 300,
    marginBottom: 25,
  },
  text: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
})
