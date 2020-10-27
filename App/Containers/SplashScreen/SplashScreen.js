import React from 'react'
import { SafeAreaView, ImageBackground } from 'react-native'
import { Layout } from '@ui-kitten/components'
import LinearGradient from 'react-native-linear-gradient'
import Style from './SplashScreenStyle'
import { Helpers, Images } from 'App/Theme'

const SplashScreen = () => (
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
    </Layout>
  </SafeAreaView>
)

export default SplashScreen
