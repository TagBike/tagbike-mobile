import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Icon,
  MenuItem,
  OverflowMenu,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components'

import { Colors } from 'App/Theme'

const Header = ({ title, props }) => {
  const navigation = useNavigation()
  const [menuVisible, setMenuVisible] = React.useState(false)

  const BackIcon = (props) => <Icon style={{ width: 32, height: 32}}  {...props} name="arrow-back-outline" />

  const MenuIcon = (props) => <Icon {...props} name="more-vertical" />

  const InfoIcon = (props) => <Icon {...props} name="info" />

  const HelpIcon = (props) => <Icon {...props} name="question-mark-circle-outline" />

  const ViewProps = {
    style: {
      backgroundColor: 'transparent',
    },
  }

  const renderBackAction = () => (
    <TopNavigationAction
      onPress={() => {
        navigation.goBack()
      }}
      icon={BackIcon}
      appearance="control"
    />
  )

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} appearance="control" />
  )

  const renderRightActions = () => (
    <React.Fragment>
      <OverflowMenu anchor={renderMenuAction} visible={menuVisible} onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={InfoIcon} title='Sobre'/>
        <MenuItem accessoryLeft={HelpIcon} title='Ajuda'/>
      </OverflowMenu>
    </React.Fragment>
  )

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <TopNavigation
      accessoryLeft={renderBackAction}
      accessoryRight={renderRightActions}
      alignment="center"
      style={{
        backgroundColor: Colors.primary,
      }}
      {...props}
      title={typeof title === 'string' ? <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{title}</Text> : title}
    />
  )
}

export default Header
