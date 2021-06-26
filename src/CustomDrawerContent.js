/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {IMAGE} from './constants/Image';

export class CustomDrawerContent extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <View
          style={{
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={IMAGE.ICON_PROFILE}
            style={{height: 120, width: 120, borderRadius: 60}}
          />
        </View> */}
        <ScrollView style={{marginLeft: 10}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 20,
              paddingBottom: 10,
              alignItems: 'center',
              // justifyContent: 'center',
              // borderBottomColor: 'black',
              // borderBottomWidth: 1,
            }}
            onPress={() => this.props.navigation.navigate('Class')}>
            <Image
              source={IMAGE.ICON_FOLDER}
              style={{
                height: 30,
                width: 30,
                borderRadius: 60,
                tintColor: '#0099ff',
              }}
            />
            <Text style={{marginLeft: 10, color: '#0099ff'}}>Class</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 20,
              paddingBottom: 10,
              alignItems: 'center',
            }}
            onPress={() => this.props.navigation.navigate('Schedule')}>
            <Image
              source={IMAGE.ICON_FOLDER}
              style={{
                height: 30,
                width: 30,
                borderRadius: 60,
                tintColor: '#0099ff',
              }}
            />
            <Text style={{marginLeft: 10, color: '#0099ff'}}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 20,
              paddingBottom: 10,
              alignItems: 'center',
            }}
            onPress={() => this.props.navigation.navigate('Tryout')}>
            <Image
              source={IMAGE.ICON_MEDAL}
              style={{
                height: 30,
                width: 30,
                borderRadius: 60,
                tintColor: '#0099ff',
              }}
            />
            <Text style={{marginLeft: 10, color: '#0099ff'}}>Tryout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 20,
              paddingBottom: 10,
              alignItems: 'center',
            }}
            onPress={() => this.props.navigation.navigate('Account')}>
            <Image
              source={IMAGE.ICON_PROFILE}
              style={{
                height: 30,
                width: 30,
                borderRadius: 60,
                tintColor: '#0099ff',
              }}
            />
            <Text style={{marginLeft: 10, color: '#0099ff'}}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 20,
              paddingBottom: 10,
              alignItems: 'center',
            }}
            onPress={() => this.props.navigation.navigate('Setting')}>
            <Image
              source={IMAGE.ICON_SETTING}
              style={{
                height: 30,
                width: 30,
                borderRadius: 60,
                tintColor: '#0099ff',
              }}
            />
            <Text style={{marginLeft: 10, color: '#0099ff'}}>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 20,
              paddingBottom: 10,
              alignItems: 'center',
            }}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Image
              source={IMAGE.ICON_LOGOUT}
              style={{
                height: 30,
                width: 30,
                borderRadius: 60,
                tintColor: '#0099ff',
              }}
            />
            <Text style={{marginLeft: 10, color: '#0099ff'}}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
