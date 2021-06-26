/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView, Button, Image} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      photo: 'image',
      email: '',
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginEnd: 10,
            marginTop: 10,
          }}>
          <Button
            title="Admin"
            color="black"
            size="large
            "
            onPress={() => this.props.navigation.navigate('Admin')}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Sign in into your account</Text>
          <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._signIn}
          />
          <Text>{this.state.name}</Text>
          <Text>{this.state.email}</Text>
          <Image
            source={{uri: this.state.photo}}
            style={{height: 40, width: 40}}
          />
          {/* <Button
            title="Sign in with google"
            onPress={() => alert('button pressed')}
          />
          <Text>Login Screen!</Text>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('HomeApp')}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Register</Text>
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    );
  }
  componentDidMount() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '135505966895-vripk0qve5ooi10eigdii1din5251sdm.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      // googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    });
  }
  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      this.setState({
        name: userInfo.user.name,
        email: userInfo.user.email,
        photo: userInfo.user.photo,
      });
      this.props.navigation.navigate('HomeApp');
      // this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
      console.log(error);
    }
  };
  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    this.setState({isLoginScreenPresented: !isSignedIn});
    this.props.navigation.navigate('Register');
  };
}
