import React from 'react';
import {TextInput, StyleSheet} from 'react-native';


export default class Home extends React.Component {

    render() {
        return (
            <TextInput
            style={style.textinput}
          
          />
        )
    }
}

const style = StyleSheet.create ({
textinput: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10

}
})
