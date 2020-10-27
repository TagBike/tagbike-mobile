import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Input as InputText, Item, Text, View } from 'native-base'
import { Metrics } from 'App/Theme'
import Style from './InputStyles'

const Input = (props) => {
  const { children, type } = props

  return (
    <View style={Style.container}>
      <InputText {...props} style={Style.input} placeholderTextColor={Style.placeholder} />
    </View>
  )
}

export { Input }
