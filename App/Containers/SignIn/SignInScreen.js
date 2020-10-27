import React, { useEffect } from 'react'
import {
  Platform,
  View,
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native'
import { Layout, Button, Icon, Input } from '@ui-kitten/components'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import Style from './SignInScreenStyle'
import { ApplicationStyles, Helpers, Fonts, Images, Metrics } from 'App/Theme'
import Header from 'App/Components/UI/Header'

const SignInScreen = ({ navigation, props }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.SignIn.user)
  const userIsLoading = useSelector((state) => state.SignIn.userIsLoading)
  const userErrorMessage = useSelector((state) => state.SignIn.userErrorMessage)

  const [password, setPassword] = React.useState(true)
  const [secureTextEntry, setSecureTextEntry] = React.useState(true)

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  )

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

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
          <>
            <Header title="Entrar" appearance="control" />
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
                <KeyboardAvoidingView>
                  <Input style={Style.input} placeholder="E-Mail" size="large" />
                  <Input
                    style={[Style.input, Metrics.mediumBottomMargin]}
                    value={password}
                    placeholder="Senha"
                    accessoryRight={renderIcon}
                    secureTextEntry={secureTextEntry}
                    onChangeText={(nextValue) => setPassword(nextValue)}
                    size="large"
                  />
                  <Button
                    onPress={() => {
                      navigation.navigate('SignIn')
                    }}
                    style={Style.button}
                    status="basic"
                  >
                    ENTRAR
                  </Button>
                </KeyboardAvoidingView>
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
          </>
        )}
      </Layout>
    </SafeAreaView>
  )
}

export default SignInScreen
