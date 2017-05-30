import React from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';

export class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.loginButton}>
          <Text style={styles.buttonText}>Connect With Spotify</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1DB954',
    borderRadius: 20,
    width: 300,
    height: 70
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
