import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,

} from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";

export default class Home extends React.Component {
  render() {
    return (
      <View>
       <DropDownPicker
                  items={[
                    { label: 'Car Documents', value: 'Doc1' },
                    { label: 'House Documents', value: 'Doc2' },
                    { label: 'Passports', value: 'Doc3' },
                    { label: 'Tax Documents', value: 'Doc4' },
                    { label: 'Banking DOcuments', value: 'Doc5' }
                  ]}
                  placeholder="Choose Document"

                 
                />
        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("Doc")}>
          <Text>Add Documents</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}
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
    borderWidth: 2,
    width: 250,
    alignItems: 'center',
    marginTop: 70,
    marginLeft: 40,
  },
  button: {
    marginTop: 300,
    marginLeft: 120,
    backgroundColor: 'royalblue',
    width: 101,
  },
});
