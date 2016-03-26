/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class spy extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
            <Text style={{backgroundColor: '#FF0000', padding: 10, marginBottom: 10}}>New Game</Text>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Text>Players</Text>
              <TextInput style={{height: 40, marginLeft: 5, width: 30, borderColor: 'blue'}} value={ '3' } />
            </View>
          <Text style={{borderRadius: 10, marginTop: 10,  backgroundColor: '#00FF00', padding: 10}}>Go!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('spy', () => spy);
