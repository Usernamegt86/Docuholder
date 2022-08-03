import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList,Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import db from '../config'

// You can import from local files


// or any pure javascript modules available in npm

export default class Doc extends React.Component {
  constructor(){
    super()
this.state={
  data:[],

  url:"",
  title:""
}
    
  }
      openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    this.setState({
      url:pickerResult
    })
      db.collection("documents").add({
      "documents_url":this.state.url,
      "title":this.state.title
    })
  };
  
render(){
  return (
    <View style={styles.container}>
      <FlatList data={"data"} renderItem= {this.renderItem }keyExtractor={this.keyExtractor}/>
<Image source={this.state.url} style={{width:100, height:100}}/>
      <TouchableOpacity onPress={this.openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a Document</Text>
      </TouchableOpacity>
    </View>
  );
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
    marginTop:200,
    marginLeft:110,
    backgroundColor:"royalblue",
    width:150,
    height:40,
    borderWidth:2,
    borderRadius:20,
    justifyContent:"center",
    paddingLeft:10
    
  }
});