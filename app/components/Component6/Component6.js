import React, {Component} from 'react';
import {AppRegistry, Text, View, Button, StyleSheet} from 'react-native';

export default class Component6 extends Component{
  constructor(props){
      super(props);
      this.state = {
        name: this.props.user.name,
        email: this.props.user.email,
      }
    }

  onPress(){
    this.props.navigator.push({
      id: 'component5'
    });
  }

  render(){
    return (
      <View>
        <Text style={styles.topText}>User Info</Text>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.email}</Text>
        <Button
          onPress={this.onPress.bind(this)}
          title="Go Back"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topText: {
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    backgroundColor: '#f49500',
    color: '#fff',
    fontSize: 25
  },
  text: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20
  }
});


AppRegistry.registerComponent('Component6', () => Component6);