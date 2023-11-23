/**
 * Author: ME
 *
 * @format TypeScript Standard Style(standardJS, Prettier)
 * @flow strict-local
 */


import React, { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,

  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { ms } from 'react-native-size-matters';
import { messages } from './src/constants/list';

 const Chat = ({showchat,headerTitle='Header',titleColor='black',headerColor='blue',chatBackground='lightblue',messageBackground='#2875d4'}) => {
  // const route = useRoute();

  

  const [loading, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<any>('');
  // const IsFocused = useIsFocused();
  const [color, onColorSelected] = useState<any>('black');
  const [picker, showPicker] = useState<any>();
  const [comment, setComment] = useState<any>();
  const [list, setList] = useState<any>(messages);
  const flatlist = useRef();

  const Picker = () => (
    <TriangleColorPicker
      onColorSelected={color => {
        headerColor=color
        onColorSelected(color), showPicker(false);
      }}
      style={{flex: 1}}
    />
  );
  const _scrollToIndexFailed = error => {
    console.log(error);
    flatlist.current?.scrollToOffset({
      offset: error.averageItemLength * (error.index + 1),
      animated: false,
    });
    setTimeout(() => {
      if (list?.length !== 0 && flatlist.current) {
        flatlist.current?.scrollToIndex({
          index: error.index,
          animated: true,
        });
      }
    }, 100);
  };
  const renderItem = item => {
    return (
      <View
        style={{
          backgroundColor: messageBackground,
          height: 'auto',
          margin: ms(5),
          paddingHorizontal: ms(2),
          borderWidth: 3,
          borderColor: '#070829',
          borderRadius: 5,
        }}>
        <Text style={{fontSize: ms(16)}}>{item.item.message}</Text>
        <Text style={{fontSize: ms(8), alignSelf: 'flex-end'}}>
          {new Date(item.item.timestamp * 1000).toLocaleString()}
        </Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      pointerEvents={loading ? 'none' : 'auto'}
      enabled={Platform.OS === 'ios'}
      behavior="padding">
    
      <View
        style={{
          backgroundColor: headerColor,
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => showPicker(true)}>
          <Text
            style={{
              fontSize: ms(20),
              alignSelf: 'center',
              marginLeft: '50%',
            }}>
           {headerTitle}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
           showchat(false)
          }}>
          <Image style={{width:20,height:20}}source={require('chatcomponentest/node_modules/react-native-chat-component-simplify360assignment/src/assets/icons/cross.png')} />
        </TouchableOpacity>
      </View>
    
      <TextInput
        value={comment}
        placeholder="Enter Message"
        onSubmitEditing={() => {
          if (comment.trim() != '') {
            let updateList = list;
            updateList.push({
              message: comment,
              timestamp: Math.floor(Date.now() / 1000),
            });
            setList(updateList);
            setComment('');
            flatlist.current.scrollToIndex({
              animated: true,
              index: list.length - 1,
              viewPosition: 0,
            });
          } else {
            setComment('');
          }
        }}
        onChangeText={setComment}
        style={{
          height: ms(40),
          backgroundColor: 'grey',
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 4,
          margin: 5,
        }}
      />
      <View style={{flex: 1}}>
        <FlatList
          ref={flatlist}
          style={{backgroundColor: chatBackground}}
          data={list}
          renderItem={item => renderItem(item)}
          showsVerticalScrollIndicator={true}
          onScrollToIndexFailed={_scrollToIndexFailed}
        />
      </View>
     
    </KeyboardAvoidingView>
  );
};

export default Chat