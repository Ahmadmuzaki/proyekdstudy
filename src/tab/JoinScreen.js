/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {CustomHeader} from '../index';
export class JoinScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="dStudy" navigation={this.props.navigation} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Join Screen!</Text>
        </View>
      </SafeAreaView>
    );
  }
}
