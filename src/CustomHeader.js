/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {IMAGE} from './constants/Image';
export class CustomHeader extends Component {
  render() {
    let {navigation, isHome, title} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          backgroundColor: '#0099ff',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          {isHome ? (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 10,
                  tintColor: 'white',
                }}
                source={IMAGE.ICON_MENU}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => navigation.goBack()}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: 5,
                  tintColor: 'white',
                }}
                source={IMAGE.ICON_BACK}
                resizeMode="contain"
              />
              <Text style={{color: 'white', marginLeft: 5}}>Back</Text>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            flex: 1.5,
            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'center', color: 'white'}}>{title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Image
            style={{
              width: 30,
              height: 30,
              tintColor: 'white',
              marginEnd: 10,
            }}
            source={IMAGE.ICON_ALARM}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
