import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {instaImage} from './assets';

export class App extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Image
          resizeMode="contain"
          style={styles.tinyLogo}
          source={instaImage}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          // onChangeText={onChangeText}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          // onChangeText={onChangeText}
          // value={text}
        />
        <TouchableOpacity style={{width: '90%'}}>
          <Text
            style={{
              textAlign: 'right',
              textDecorationLine: 'underline',
              color: 'skyblue',
            }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '90%'}}>
          <View style={{marginTop: 60, backgroundColor: 'skyblue'}}>
            <Text
              style={{
                paddingVertical: 10,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Log In
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1, // capture entire parent space
    justifyContent: 'center', // vertical center
    alignItems: 'center', //horizontal center
    // borderWidth: 5,
    // borderColor: 'red'
  },
  tinyLogo: {
    width: '90%',
    height: 100,
    marginBottom: 80,
  },
  input: {
    width: '90%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#cccccc',
    borderRadius: 6,
    backgroundColor: '#e5e5e5',
  },
});

export default App;
