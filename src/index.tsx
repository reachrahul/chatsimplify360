import React, {useState} from 'react';
import MainStack from './navigation/mainStack';
import {ThemeContext, darkTheme, lightTheme, themeProps} from './theme';
import {SettingProvider} from './utils/settingProvider';
import {Provider} from 'react-redux';
import {persistor, store} from './utils/store';
import {PersistGate} from 'redux-persist/integration/react';

export default function MyApp() {
  // const [theme, setTheme] = useState<themeProps>(lightTheme);

  // const _changeTheme = (scheme: String) => {
  //   let newTheme = scheme === 'dark' ? darkTheme : lightTheme;
  //   setTheme(newTheme);
  // };

  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <MainStack />
    //   </PersistGate>
    // </Provider>
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}
