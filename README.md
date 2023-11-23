# ChatAssignmentsimplify360

This is an assignment by RahulSaini for chat component by simplify360 company.
Time Taken to build: 3-4 hours

To run the component just install it from the NPM package or clone the repo.

This is a very simple implementation of chat component where the list of chats are shown where user can go to specific chat.

Features implmented:

Used a custom color picker when tapping on Header Title the color picker will show, it is used to set background of the header.

Also implemented functionality to scroll to latest message in case of screen is full.
Used a flatlist implementation.

how to install: npm i react-native-chat-component-simplify360assignment

requires node v16.20.2+ -> check your node version using nvm ls

Make sure the dependencies of package and your application is for React Native and React are same.

**import Chat component from the library **

import Chat from 'react-native-chat-component-simplify360assignment'

**Chat** component takes these props, if not passed will have default values set to them.

showchat => CALLBACK FUNCTION (pass this callback function from where CHAT is used, to make the CROSS/BACK functionality work of Chat)
**for example below code**

********
const [chat, showChat] = useState(true);
  const showchat = () => {
    showChat(false);
  };
  return (
    <View style={{flex: 1}}>
      {!chat ? (
        <Button title="Open Chat" onPress={() => showChat(true)} />
      ) : (
        <></>
      )}
      {chat ? <Chat headerTitle={'New Header'} showchat={showchat} /> : <></>}
    </View>
  )
********

headerTitle='Header' => STRING VALUE (used to give custom headertitle)
titleColor='black' => STRING VALUE (used to give custom color to title)
headerColor='blue' => STRING VALUE (used to give custom color to header Background color)
chatBackground='lightblue' => STRING VALUE (used to give custom color to chat's View color)
messageBackground='#2875d4' => STRING VALUE (used to give custom color to message popups color)


**Styling**
Current version includes mostly inline styles, but will later have stylesheets imported and used




