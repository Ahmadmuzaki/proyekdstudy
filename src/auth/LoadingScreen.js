import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

class LoadingScreen extends Component {
  // componentDidMount() {
  //   this.checkIfLoggedIn();
  // }
  // checkIfLoggedIn = () => {
  //   firebase.auth().onAuthStateChanged(
  //     function (user) {
  //       if (user) {
  //         this.props.navigation.navigate('Register');
  //       } else {
  //         this.props.navigation.navigate('Login');
  //       }
  //     }.bind(this),
  //   );
  // };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
