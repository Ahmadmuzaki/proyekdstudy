/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constants/Image';
export class AccountScreen extends Component {
  render() {
    return (
      <>
        <ScrollView style={{flex: 1}}>
          <CustomHeader
            title="dStudy"
            isHome={true}
            navigation={this.props.navigation}
          />
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                width: '100%',
                paddingTop: 20,
                paddingStart: 20,
                backgroundColor: '#99eeff',
              }}>
              <Text>You're currently signed in</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                paddingBottom: 20,
                marginBottom: 20,
                backgroundColor: '#99eeff',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginStart: 20,
                }}>
                <Image source={IMAGE.ICON_PROFILE} />
                <View style={{marginStart: 10}}>
                  <Text>account name</Text>
                  <Text>account@email.com</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 100,
                    backgroundColor: '#0099ff',
                    marginEnd: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white'}}>Switch Account</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View>
          {/* Member */}
          <TouchableOpacity
            style={{
              marginStart: 20,
              marginBottom: 30,
            }}
            onPress={() => this.props.navigation.navigate('ClassDetail')}>
            <Text>(member)(hide)</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginEnd: 20,
                marginBottom: 5,
                marginTop: 5,
              }}
            />
            <Text>(unregister/register/admin)(hide)</Text>
          </TouchableOpacity>
          {/* School */}
          <TouchableOpacity
            style={{
              marginStart: 20,
              marginBottom: 30,
            }}
            onPress={() => this.props.navigation.navigate('ClassDetail')}>
            <Text>school</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginEnd: 20,
                marginBottom: 5,
                marginTop: 5,
              }}
            />
            <Text>(school name)</Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    );
  }
}
