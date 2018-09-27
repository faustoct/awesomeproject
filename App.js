import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

export default class App extends React.Component {
  constructor(props) {
   super(props)
   this.state = {val: ''}
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInputMask
          underlineColorAndroid='transparent'
          style={{height: 40, borderBottomColor: 'gray', borderBottomWidth: 1, width: 250, padding: 5, fontSize: 20}}
          keyboardType='numeric'
          placeholder='  (XX) XXXXX-XXXX'
          refInput={ref => { this.inputmask = ref }}
          value={this.state.val}
          onChangeText={(formatted, extracted) => this.setState({val: extracted}) }
          mask={"([00]) [00000]-[0000]"}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
