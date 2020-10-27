import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from 'App/Services/NavigationService'

//import Header from 'App/Components/UI/Header'
import InitialScreen from 'App/Containers/Initial/InitialScreen'
import ScanScreen from 'App/Containers/Scan/ScanScreen'
import SignInScreen from 'App/Containers/SignIn/SignInScreen'
import SignUpScreen from 'App/Containers/SignUp/SignUpScreen'
import DeepLinkingScreen from 'App/Containers/DeepLinking/DeepLinkingScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'

const Stack = createStackNavigator()

function RootStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ gestureEnabled: false }}
        headerMode={false}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Initial" component={InitialScreen} path="initial" />
        <Stack.Screen name="Scan" component={ScanScreen} path="scan" />
        <Stack.Screen name="SignIn" component={SignInScreen} path="signin" />
        <Stack.Screen name="SignUp" component={SignUpScreen} path="signup" />
        <Stack.Screen name="DeepLinking" component={DeepLinkingScreen} path="deeplink" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack