/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {CustomHeader} from '../index';
export class TryoutScreen extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={{flex: 1}}>
          <CustomHeader
            title="dStudy"
            isHome={true}
            navigation={this.props.navigation}
          />
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Tryout!</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 2,
                marginEnd: 20,
                marginStart: 20,
                marginBottom: 10,
              }}
            />
            <TouchableOpacity style={styles.floatingActionButton}>
              <Text style={{color: 'white'}}>Regular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.floatingActionButton}>
              <Text style={{color: 'white'}}>Season</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  floatingActionButton: {
    backgroundColor: '#0099ff',
    height: 30,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
