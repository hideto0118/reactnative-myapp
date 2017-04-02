import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TextInput, Switch} from 'react-native';

export default class Component3 extends Component{
  constructor(){
    super();
    this.state = {
      textValue: 'Hello',
      switchValue: true
    }
  }

  onChangeText(value){
    this.setState({
      textValue: value
    });
  }

  onSwitchChange(value){
    this.setState = {
      switchValue: value
    }
  }

  onSubmit(){
    console.log('Input Submitted...');
  }

  render(){
    return (
      <View>
        <Text style={styles.topText}>Text Changer</Text>
        <TextInput
          placeholder="Enter Text"
          value={this.state.textValue}
          onChangeText={(value)=>this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
          style={styles.input}
        />
        <Text style={styles.showText}>{this.state.textValue}</Text>
        <Switch
          value={this.state.switchValue}
          onValueChange={(value) => this.onSwitchChange(value)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topText: {
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: '#f49500',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 25,
    color: '#fff'
  },
  input: {
    backgroundColor: '#eee',
    marginTop: 100,
    marginLeft: 50,
    marginRight: 50,
    height: 40
  },
  showText: {
    marginLeft: 50,
    marginRight: 50,
  }
});

AppRegistry.registerComponent('Component3', () => Component3);
