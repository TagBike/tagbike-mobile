import { StyleSheet } from 'react-native'
import { Helpers, Colors } from 'App/Theme'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
  },
  logo: {
    height: 70,
    width: 70,
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
})
