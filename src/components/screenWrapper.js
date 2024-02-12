import { View, StatusBar, Platform } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

ScreenWrapper.propTypes = {
    children: PropTypes.any
  };

export default function ScreenWrapper({children}) {
    let statusBarHeight = StatusBar.currentHeight? StatusBar.currentHeight: Platform.OS=='ios'? 30: 0;
  return (
    <View style={{paddingTop: statusBarHeight}}>
      {
        children
      }
    </View>
  )
}