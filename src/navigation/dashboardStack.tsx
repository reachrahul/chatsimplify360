import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {
  ACCESS_CONTROL_MODAL_SCREEN,
  // ADD_TICKET_DIALOG_SCREEN,
  // ADD_WORD_DIALOG_SCREEN,
  // ADMIN_DETAIL_SCREEN,
  Add_IP_DIALOG_SCREEN,
  // BOTTOM_STACK_SCREEN,
  // DATA_DETAILS_DIALOG_SCREEN,
  // TICKET_DETAIL_SCREEN,
  // AWAITING_APPROVAL_SCREEN,
  CHAT,
  CHATLIST,
} from '../constants/stacks';
import {Chat} from '../screens/chats';
import {ChatList} from '../screens/chatList';
// import BottomStack from './bottomStack';
const Stack = createStackNavigator();
const {SlideFromRightIOS, ModalSlideFromBottomIOS} = TransitionPresets;

export default function DashboardStack() {
  return (
    <Stack.Navigator
      initialRouteName={CHATLIST}
      screenOptions={{
        headerShown: false,
        ...SlideFromRightIOS,
      }}>
      {/* <Stack.Screen name={BOTTOM_STACK_SCREEN} component={BottomStack} />
      <Stack.Screen name={ADMIN_DETAIL_SCREEN} component={AdminDetail} />
      <Stack.Screen name={TICKET_DETAIL_SCREEN} component={TicketDetails} />
      <Stack.Screen name={AWAITING_APPROVAL_SCREEN} component={AwaitingApproval} /> */}
      <Stack.Screen name={CHATLIST} component={ChatList} />

      <Stack.Screen name={CHAT} component={Chat} />
    </Stack.Navigator>
  );
}
