import {NavigationContainer} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {
  AUTH_SCREEN,
  SPLASH_SCREEN,
  DASHBOARD_STACK_SCREEN,
} from '../constants/stacks';
import {Splash} from '../screens/splash';
import AuthStack from './authStack';
import {navigationRef} from './rootNavigation';
import DashboardStack from './dashboardStack';

const Stack = createStackNavigator();
const {SlideFromRightIOS} = TransitionPresets;

export default function MainStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={SPLASH_SCREEN}
        screenOptions={{
          headerShown: false,
          ...SlideFromRightIOS,
        }}>
        <Stack.Screen name={SPLASH_SCREEN} component={Splash} />
        <Stack.Screen
          name={DASHBOARD_STACK_SCREEN}
          component={DashboardStack}
        />
        {/* <Stack.Screen name={AUTH_SCREEN} component={AuthStack} />
        <Stack.Screen
          name={DASHBOARD_STACK_SCREEN}
          component={DashboardStack}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
