/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
 
});


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        </Text>
        <Text style={styles.instructions}>
        </Text>
        <Text>Hallo!!!</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Image source={require('./anita.jpg')} style={{width:240, height:300}} />
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text>Nama : Anita Rachman</Text>
        <Text>Kelas : XI RPL 3</Text>
        <Text>No Absen : 06</Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8B1AB',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
