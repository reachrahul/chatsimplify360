import { RouteProp, useRoute } from "@react-navigation/native";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import * as React from "react";
import { OTP_VERIFICATION_SCREEN, SIGN_IN_SCREEN } from "../constants";
import { OTPVerification, SignIn } from "../screens";

const Stack = createStackNavigator();
const { SlideFromRightIOS } = TransitionPresets;
export default function AuthStack() {
  const route: RouteProp<{ params: { redirect: string } }, "params"> =
    useRoute();
  const redirect = route?.params?.redirect;
  return (
    <Stack.Navigator
      initialRouteName={redirect || SIGN_IN_SCREEN}
      screenOptions={{
        headerShown: false,
        ...SlideFromRightIOS,
      }}
    >
      <Stack.Screen name={SIGN_IN_SCREEN} component={SignIn} />
      <Stack.Screen
        name={OTP_VERIFICATION_SCREEN}
        component={OTPVerification}
      />
    </Stack.Navigator>
  );
}
