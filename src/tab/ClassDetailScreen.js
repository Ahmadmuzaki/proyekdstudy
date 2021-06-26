/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {IMAGE} from '../constants/Image';
import {CustomHeader} from '../index';
export class ClassDetailScreen extends Component {
  render() {
    return (
      <>
        <ScrollView style={{flex: 1}}>
          <CustomHeader
            title="dStudy"
            isHome={false}
            navigation={this.props.navigation}
          />
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                backgroundColor: '#99eeff',
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
              />
              <View
                style={{
                  flex: 1.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>code : (class code)</Text>
                <Text>(class title)</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'black',
                    marginEnd: 10,
                  }}
                  source={IMAGE.ICON_UNLOCK}
                />
              </TouchableOpacity>
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
                  <Text>code : (class code)</Text>
                  <Text>(class title)</Text>
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
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'black',
                    marginEnd: 10,
                  }}
                  source={IMAGE.ICON_MORE}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{marginStart: 20}}>
              Description_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginBottom: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginStart: 20,
              }}>
              <Text>Announcer</Text>
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
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: 'black',
                  marginEnd: 10,
                }}
                source={IMAGE.ICON_SPEAKER}
              />
            </TouchableOpacity>
          </View>
          {/* Section 1 */}
          <TouchableOpacity
            style={{
              marginStart: 20,
              marginBottom: 10,
            }}
            onPress={() => this.props.navigation.navigate('ClassDetail')}>
            <Text>(section 1)</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginEnd: 20,
                marginBottom: 5,
                marginTop: 5,
              }}
            />
            <Text>(section title)</Text>
          </TouchableOpacity>
          {/* Section 2 */}
          <TouchableOpacity
            style={{
              marginStart: 20,
              marginBottom: 10,
            }}
            onPress={() => this.props.navigation.navigate('ClassDetail')}>
            <Text>(section 2)</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginEnd: 20,
                marginBottom: 5,
                marginTop: 5,
              }}
            />
            <Text>(section title)</Text>
          </TouchableOpacity>
          {/* Section 3 */}
          <TouchableOpacity
            style={{
              marginStart: 20,
              marginBottom: 10,
            }}
            onPress={() => this.props.navigation.navigate('ClassDetail')}>
            <Text>(section 3)</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginEnd: 20,
                marginBottom: 5,
                marginTop: 5,
              }}
            />
            <Text>(section title)</Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    );
  }
}
