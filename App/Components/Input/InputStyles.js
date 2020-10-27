import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.transparent,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: Colors.white,
    borderColor: Colors.gray,
    borderRadius: 10,
    borderWidth: 1,
    color: '#BDBDBD',
    marginBottom: Metrics.tiny,
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
  },
  placeholder: {
    color: '#BDBDBD',
  },
})