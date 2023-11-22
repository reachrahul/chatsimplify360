import React from 'react';
import {ms} from 'react-native-size-matters';
import type {PropsWithChildren} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {TMClogo, BG, Menu, Search} from '../assets';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function HeaderCustom(): JSX.Element {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingLeft: ms(18),
        paddingRight: ms(12),
        paddingVertical: ms(9),
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            console.log('asd');
          }}>
          <Menu width={ms(27)} height={ms(17)} marginRight={ms(11)} />
        </TouchableOpacity>
        <TMClogo width={ms(107)} height={ms(40)} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Search width={ms(18)} height={ms(18)} marginRight={ms(12)} />

        <LinearGradient
          style={{alignSelf: 'center'}}
          useAngle={true}
          angle={91}
          locations={[0, 1]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#6C7AF6', '#A97DF1']}>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => {
              console.log('asd');
            }}>
            <Text
              style={{
                fontFamily: 'Matteo-Regular',
                fontStyle: 'normal',
                color: 'white',
                fontSize: ms(16),
                textAlign: 'center',
                fontWeight: '600',
                marginHorizontal: ms(20),
                marginVertical: ms(8),
              }}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

export default HeaderCustom;
