import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {TriangleColorPicker} from 'react-native-color-picker';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {BG} from '../../assets';
import {messages} from '../../constants/list';
import {err} from 'react-native-svg/lib/typescript/xml';
import {useFocusEffect} from '@react-navigation/native';

export const Chat = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const route = useRoute();
  const Data = route?.params?.data;
  console.log(Data);
  const {t} = useTranslation();
  const dispatch = useDispatch<any>();

  const [loading, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<any>('');
  const IsFocused = useIsFocused();
  const [color, onColorSelected] = useState<any>('black');
  const [picker, showPicker] = useState<any>();
  const [comment, setComment] = useState<any>();
  const [list, setList] = useState<any>(messages);
  const flatlist = useRef();

  const Picker = () => (
    <TriangleColorPicker
      onColorSelected={color => {
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
          backgroundColor: '#2875d4',
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
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <SafeAreaView />
      <View
        style={{
          backgroundColor: color,
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
            {Data.title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}>
          <BG height={20} width={20} marginRight={10} />
        </TouchableOpacity>
      </View>
      {picker ? (
        <View style={{height: ms(250)}}>
          <Picker />
        </View>
      ) : null}
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
          backgroundColor: '#2b526b',
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 4,
          margin: 5,
        }}
      />
      <View style={{backgroundColor: 'grey', flex: 1}}>
        <FlatList
          ref={flatlist}
          style={{backgroundColor: 'lightblue'}}
          data={list}
          renderItem={item => renderItem(item)}
          showsVerticalScrollIndicator={true}
          onScrollToIndexFailed={_scrollToIndexFailed}
        />
      </View>
      <SafeAreaView />
    </KeyboardAvoidingView>
  );
};
function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}
