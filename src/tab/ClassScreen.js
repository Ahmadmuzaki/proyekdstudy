/* eslint-disable react-native/no-inline-styles */ /* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constants/Image';
export class ClassScreen extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  render() {
    const {modalVisible} = this.state;
    return (
      <>
        {/* Start Modal */}
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              this.setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={styles.floatingActionButtonModal}
                  onPress={() => [
                    this.props.navigation.navigate('JoinClass'),
                    this.setModalVisible(!modalVisible),
                  ]}>
                  <Text style={{height: 20, width: 20, color: 'white'}}>
                    join
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.floatingActionButtonModal}
                  onPress={() => [
                    this.props.navigation.navigate('CreateClass'),
                    this.setModalVisible(!modalVisible),
                  ]}>
                  <Text style={{height: 35, width: 35, color: 'white'}}>
                    create
                  </Text>
                </TouchableOpacity>
                <Pressable onPress={() => this.setModalVisible(!modalVisible)}>
                  <Text style={{color: 'white'}}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        {/* End Modal */}
        <SafeAreaView style={{flex: 1}}>
          <CustomHeader
            title="dStudy"
            isHome={true}
            navigation={this.props.navigation}
          />
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              Class Collection
            </Text>
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
          {/* Class title */}
          <TouchableOpacity
            style={{
              marginStart: 20,
            }}
            onPress={() => this.props.navigation.navigate('ClassDetail')}>
            <Text>(Class title)</Text>
            <Text>(Teacher name)</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginEnd: 20,
                marginBottom: 10,
              }}
            />
          </TouchableOpacity>
          {/* Class title */}
          <TouchableOpacity
            style={{
              marginStart: 20,
            }}
            onPress={() => this.props.navigation.navigate('ClassDetail')}>
            <Text>(Class title)</Text>
            <Text>(Teacher name)</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginEnd: 20,
                marginBottom: 10,
              }}
            />
          </TouchableOpacity>
          {/* Class title */}
          <TouchableOpacity
            style={{
              marginStart: 20,
            }}
            onPress={() => this.props.navigation.navigate('ClassDetail')}>
            <Text>(Class title)</Text>
            <Text>(Teacher name)</Text>
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
        <TouchableOpacity
          style={styles.floatingActionButton}
          onPress={() => this.setModalVisible(true)}>
          <Image
            source={IMAGE.ICON_ADD}
            style={{height: 20, width: 20, tintColor: 'white'}}
          />
        </TouchableOpacity>
      </>
    );
  }
}
const styles = StyleSheet.create({
  floatingActionButton: {
    backgroundColor: '#0099ff',
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 35,
    right: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingActionButtonModal: {
    backgroundColor: '#0099ff',
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
