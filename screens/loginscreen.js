import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


// You can import from local files


// or any pure javascript modules available in npm

export default class Login extends React.Component {
  render(){
  return (
    <View>
    <TextInput style={styles.inputbox} placeholder={"Username"}/>
    <TextInput style={styles.inputbox} placeholder={"Password"}/>
    <TouchableOpacity style={styles.button}>
    <Text>Submit</Text>
    </TouchableOpacity>
    
    </View>

  )
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputbox: {
    borderWidth:2,
    width:250,
    alignItems:"center",
    marginTop:70,
    marginLeft:40
  },
  button: {
    marginTop:80,
    marginLeft:130,
    backgroundColor:"royalblue",
    width:45
  }
});