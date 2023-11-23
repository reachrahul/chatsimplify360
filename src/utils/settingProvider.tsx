import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {fonts} from '../theme';

export function SettingProvider({children}: {children: any}) {
  return (
    <>
      {children}
      <FlashMessage
        position="top"
        floating
        duration={3000}
        titleStyle={{fontFamily: fonts.semiBold}}
        textStyle={{fontFamily: fonts.regular}}
      />
    </>
  );
}
