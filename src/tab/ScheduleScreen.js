/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import {CustomHeader} from '../index';
import DateTimePicker from 'react-native-modal-datetime-picker';

export class ScheduleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      isDateTimePickerVisible2: false,
      chosenDate: 'TUE JUN 01 2021',
      chosenDate2: 'WED JUN 02 2021',
    };
  }

  showDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: true});
  };
  showDateTimePicker2 = () => {
    this.setState({isDateTimePickerVisible2: true});
  };

  hideDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: false});
  };
  hideDateTimePicker2 = () => {
    this.setState({isDateTimePickerVisible2: false});
  };

  handleDatePicked = date => {
    this.setState({
      isDateTimePickerVisible: false,
      chosenDate: date.toDateString(),
    });
    console.log('A date has been picked: ', date);
    this.hideDateTimePicker();
  };
  handleDatePicked2 = date => {
    this.setState({
      isDateTimePickerVisible2: false,
      chosenDate2: date.toDateString(),
    });
    console.log('A date has been picked: ', date);
    this.hideDateTimePicker2();
  };

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
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Schedule</Text>
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
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              color="#0099ff"
              title={this.state.chosenDate}
              onPress={this.showDateTimePicker}
            />
            <Text style={{margin: 20}}>-</Text>
            <Button
              color="#0099ff"
              title={this.state.chosenDate2}
              onPress={this.showDateTimePicker2}
            />
            <DateTimePicker
              mode="date"
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
            />
            <DateTimePicker
              mode="date"
              isVisible={this.state.isDateTimePickerVisible2}
              onConfirm={this.handleDatePicked2}
              onCancel={this.hideDateTimePicker2}
            />
          </View>
          {/* Teacher 1*/}
          <TouchableOpacity
            style={{
              marginStart: 20,
            }}
            onPress={() => this.props.navigation.navigate('ClassDetail')}>
            <Text>(teacher name)</Text>
            <Text>class : (class title)</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginEnd: 20,
              }}>
              <Text>section : (section number)</Text>
              <Text>{new Date().toDateString()}</Text>
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginEnd: 20,
                marginBottom: 10,
              }}
            />
          </TouchableOpacity>
          {/* Teacher 2*/}
          <TouchableOpacity
            style={{
              marginStart: 20,
            }}
            onPress={() => this.props.navigation.navigate('ClassDetail')}>
            <Text>(teacher name)</Text>
            <Text>class : (class title)</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginEnd: 20,
              }}>
              <Text>section : (section number)</Text>
              <Text>{new Date().toDateString()}</Text>
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginEnd: 20,
                marginBottom: 10,
              }}
            />
          </TouchableOpacity>
          {/* Teacher 3*/}
          <TouchableOpacity
            style={{
              marginStart: 20,
              marginEnd: 20,
              backgroundColor: '#ffa3a3',
            }}
            onPress={() => this.props.navigation.navigate('ClassDetail')}>
            <Text>(teacher name)</Text>
            <Text>class : (class title)</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginEnd: 20,
              }}>
              <Text>section : (section number)</Text>
              <Text>{new Date().toDateString()}</Text>
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginEnd: 20,
                marginBottom: 10,
              }}
            />
          </TouchableOpacity>
          {/* Teacher 4*/}
          <TouchableOpacity
            style={{
              marginStart: 20,
              marginEnd: 20,
              backgroundColor: '#ffa3a3',
            }}
            onPress={() => this.props.navigation.navigate('ClassDetail')}>
            <Text>(teacher name)</Text>
            <Text>class : (class title)</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginEnd: 20,
              }}>
              <Text>section : (section number)</Text>
              <Text>{new Date().toDateString()}</Text>
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginEnd: 20,
                marginBottom: 10,
              }}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </>
    );
  }
}
