import {CommonActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AUTH_SCREEN, DASHBOARD_STACK_SCREEN} from '../../constants/stacks';
import {api} from '../../utils/api';

export const Splash = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  // const {token}: any = useSelector<any>(state => state.user);

  React.useEffect(() => {
    _checkAuth();
  }, []);

  const _checkAuth = async () => {
    // if (token) {
    //   api.defaultHeader({Authorization: 'Bearer ' + token});
    //   _navigateTo(DASHBOARD_STACK_SCREEN);
    // } else {
    //   _navigateTo(AUTH_SCREEN);
    // }
    _navigateTo(DASHBOARD_STACK_SCREEN);
  };

  const _navigateTo = (route: string) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: route}],
      }),
    );
  };

  return null;
};
