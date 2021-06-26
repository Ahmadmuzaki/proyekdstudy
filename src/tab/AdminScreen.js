/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constants/Image';
export class AdminScreen extends Component {
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
            <Text>Admin</Text>
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
          {/* School */}
          <View
            style={{
              flexDirection: 'row',
              height: 30,
              backgroundColor: '#7f83ff',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                marginStart: 20,
              }}>
              <Text>School</Text>
            </View>
            <View
              style={{
                flex: 1.5,
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', color: 'white'}}> </Text>
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginEnd: 20,
              }}>
              <Text>(count)</Text>
            </TouchableOpacity>
          </View>
          {/* Classroom */}
          <View
            style={{
              flexDirection: 'row',
              height: 30,
              backgroundColor: '#f87aff',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                marginStart: 20,
              }}>
              <Text>Classroom</Text>
            </View>
            <View
              style={{
                flex: 1.5,
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', color: 'white'}}> </Text>
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginEnd: 20,
              }}>
              <Text>(count)</Text>
            </TouchableOpacity>
          </View>
          {/* User */}
          <View
            style={{
              flexDirection: 'row',
              height: 30,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                marginStart: 20,
              }}>
              <Text>User</Text>
            </View>
            <View
              style={{
                flex: 1.5,
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', color: 'white'}}> </Text>
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginEnd: 20,
              }}>
              <Text>(count)</Text>
            </TouchableOpacity>
          </View>
          {/* Bank Quiz */}
          <View
            style={{
              flexDirection: 'row',
              height: 30,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                marginStart: 20,
              }}>
              <Text>Bank Quiz</Text>
            </View>
            <View
              style={{
                flex: 1.5,
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', color: 'white'}}> </Text>
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginEnd: 20,
              }}>
              <Text>(count)</Text>
            </TouchableOpacity>
          </View>
          {/* Search */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
              marginStart: 20,
            }}>
            <TextInput style={styles.input} />
            <TouchableOpacity>
              <Image
                source={IMAGE.ICON_SEARCH}
                backgroundColor="#0099ff"
                style={{tintColor: '#ebebeb', height: 40, width: 40}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: '#0099ff',
              borderBottomWidth: 2,
              margin: 20,
            }}
          />
          {/* School name */}
          <View
            style={{
              flexDirection: 'row',
              height: 30,
              backgroundColor: '#7f83ff',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                marginStart: 20,
              }}>
              <Text>School name 1</Text>
            </View>
          </View>
          {/* Class title */}
          <View
            style={{
              flexDirection: 'row',
              height: 30,
              backgroundColor: '#f87aff',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                marginStart: 20,
              }}>
              <Text>(Class title) (Teacher name)</Text>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#ebebeb',
  },
});
