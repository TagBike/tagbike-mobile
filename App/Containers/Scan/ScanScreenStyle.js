import { StyleSheet, Dimensions } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  layout: {
    flex: 1,
  },
  camera: {
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transparent,
  },
  button: {
    ...Metrics.smallHorizontalMargin,
    ...Metrics.smallVerticalMargin,
    ...Fonts.normal,
    borderRadius: 100,
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
  drawer: {
    ...Metrics.mediumHorizontalPadding,
    ...Metrics.mediumVerticalPadding,
  },
  drawerDivider: {
    backgroundColor: Colors.gray,
    borderRadius: 100,
    height: 5,
    width: 50,
  },
  drawerDividerContainer: {
    alignItems: 'center',
    flex: 1,
    marginBottom: 8,
  },
  drawerTitle: {
    ...Metrics.mediumVerticalPadding,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.text,
  },
  linearGradient: {
    flex: 1,
    flexGrow: 1,
    borderRadius: 16,
  },
  text: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  input: {
   
  },
})
