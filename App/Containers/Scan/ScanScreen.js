import React, { useEffect } from 'react'
import {
  Platform,
  View,
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native'
import { Layout, Divider, Button, Text, Icon, Input } from '@ui-kitten/components'
import LinearGradient from 'react-native-linear-gradient'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { useDispatch, useSelector } from 'react-redux'
import Style from './ScanScreenStyle'
import { ApplicationStyles, Fonts, Helpers, Images, Metrics } from 'App/Theme'
import Header from 'App/Components/UI/Header'
import BottomDrawer from 'rn-bottom-drawer'

const ScanTagScreen = (props) => {
  const { navigation } = props
  const dispatch = useDispatch()
  const user = useSelector((state) => state.SignIn.user)
  const userIsLoading = useSelector((state) => state.SignIn.userIsLoading)
  const userErrorMessage = useSelector((state) => state.SignIn.userErrorMessage)

  const [success, setSuccess] = React.useState(false)
  const [search, setSearch] = React.useState('')

  const onSuccess = (result) => {
    console.log('Result: ', result)
    setSuccess(true)
  }

  const SearchIcon = (props) => (
    <Icon {...props} name='search'/>
  );

  return (
    <SafeAreaView style={Helpers.fullSize}>
      <Layout style={Style.layout}>
        {userIsLoading ? (
          <ActivityIndicator size="large" color="#9B51E0" />
        ) : (
          <>
            <Header title="Escanear" />
            <Layout style={Style.container}>
              <View>
                <QRCodeScanner
                  onRead={onSuccess}
                  showMarker={true}
                  cameraStyle={Style.camera}
                  checkAndroid6Permissions={true}
                  customMarker={
                    <Image
                      style={Helpers.fillCenter}
                      source={Images.qrMarker}
                      resizeMode={'contain'}
                    />
                  }
                  permissionDialogMessage="Necessária permissão de acesso a câmera"
                  topContent={
                    <View>
                      <Text
                        style={[
                          Helpers.fillCenter,
                          Metrics.mediumHorizontalPadding,
                          Metrics.mediumVerticalPadding,
                          Fonts.normal,
                          {
                            textAlign: 'center',
                            color: 'white',
                            zIndex: 10
                          },
                        ]}
                      >
                        Alinhe o QR Code ao quadro para escanear
                      </Text>
                    </View>
                  }
                  topViewStyle={{
                    position: 'absolute'
                  }}
                />
              </View>
              
              <BottomDrawer containerHeight={300} offset={25} startUp={false}>
                <View style={Style.drawer}>
                  <View style={Style.drawerDividerContainer}>
                    <Divider style={Style.drawerDivider} />
                  </View>
                  <Text style={Style.drawerTitle}>INSERIR CÓDIGO MANUALMENTE</Text>
                  <Input
                    style={[Style.input, Metrics.mediumBottomMargin]}
                    value={search}
                    placeholder="Digite o código da Tag"
                    onChangeText={(nextValue) => setSearch(nextValue)}
                    size="large"
                  />
                  <Button
                    onPress={() => {
                      navigation.navigate('SignIn')
                    }}
                    style={Style.button}
                    status="basic"
                    accessoryLeft={SearchIcon}
                  />
                </View>
              </BottomDrawer>
            </Layout>
          </>
        )}
      </Layout>
    </SafeAreaView>
  )
}

export default ScanTagScreen
