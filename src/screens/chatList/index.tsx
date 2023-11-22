import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {list} from '../../constants/list';
import {CHAT} from '../../constants/stacks';

export const ChatList = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const {t} = useTranslation();
  const dispatch = useDispatch<any>();

  const [loading, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<any>('');
  //   const styles = pageStyle(color);

  const renderList = () => {
    return list.map(item => (
      <TouchableOpacity onPress={() => navigation.navigate(CHAT, {data: item})}>
        <View
          style={{
            margin: 20,
            backgroundColor: '#34deeb',
            padding: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: ms(15), color: '#0c1a1f'}}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    ));
  };
  return (
    <KeyboardAvoidingView
      style={{backgroundColor: '#193638', flex: 1}}
      pointerEvents={loading ? 'none' : 'auto'}
      enabled={Platform.OS === 'ios'}
      behavior="padding">
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <SafeAreaView />
      <View style={{margin: 10}}>{renderList()}</View>
      <SafeAreaView />
    </KeyboardAvoidingView>
  );
};
