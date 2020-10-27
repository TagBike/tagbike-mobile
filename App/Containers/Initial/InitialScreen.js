import React, { useEffect } from 'react'
import {
  Platform,
  View,
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native'
import { Layout, Button, Text, Icon } from '@ui-kitten/components'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import Style from './InitialScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'

const InitialScreen = (props) => {
  const { navigation } = props
  const dispatch = useDispatch()
  const user = useSelector((state) => state.SignIn.user)
  const userIsLoading = useSelector((state) => state.SignIn.userIsLoading)
  const userErrorMessage = useSelector((state) => state.SignIn.userErrorMessage)

  return (
    <SafeAreaView style={Helpers.fullSize}>
      <Layout style={Style.layout}>
        <LinearGradient
          colors={['rgba(155, 81, 224, 0.9)', 'rgba(109,49,137, 0.9)']}
          style={Style.linearGradient}
        >
          <ImageBackground
            style={[Helpers.fullSize, Style.background]}
            source={Images.splashcreen}
            resizeMode={'cover'}
          />
        </LinearGradient>
        {userIsLoading ? (
          <ActivityIndicator size="large" color="#9B51E0" />
        ) : (
          <Layout style={Style.container}>
            <Layout style={Style.logoContainer}>
              <Image
                style={[
                  Helpers.fillCenter,
                  Metrics.mediumHorizontalMargin,
                  Metrics.mediumVerticalMargin,
                ]}
                source={Images.logo}
                resizeMode={'contain'}
              />
            </Layout>
            <View>
              <Button
                onPress={() => {
                  navigation.navigate('SignIn')
                }}
                style={Style.button}
                status="basic"
              >
                ENTRAR
              </Button>
              <Button
                onPress={() => {
                  navigation.navigate('Scan')
                }}
                 style={Style.button} status="basic"
              >
                CONSULTAR BIKE
              </Button>
              <Button
                onPress={() => {
                  navigation.navigate('SignUp')
                }}
                style={Style.button}
                status="control"
                appearance="ghost"
              >
                CRIAR NOVA CONTA
              </Button>
            </View>
          </Layout>
        )}
      </Layout>
    </SafeAreaView>
  )
}

export default InitialScreen
