/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView, Picker} from 'react-native';
import {CustomHeader} from '../index';
export class SettingScreen extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={{flex: 1}}>
          <CustomHeader
            title="dStudy"
            isHome={true}
            navigation={this.props.navigation}
          />
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Setting</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              marginEnd: 20,
              marginStart: 20,
              marginBottom: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginStart: 20,
            }}>
            <Text style={{flex: 1.5}}>Alarm Notifications</Text>
            <View style={{flex: 1}}>
              <Picker>
                <Picker.Item label="5 minutes" value="5 minutes" />
                <Picker.Item label="10 minutes" value="10 minutes" />
                <Picker.Item label="15 minutes" value="15 minutes" />
                <Picker.Item label="30 minutes" value="30 minutes" />
              </Picker>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
