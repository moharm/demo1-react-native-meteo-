import React from 'react';
import {TextInput, StyleSheet, Button, View } from 'react-native';
import globalStyle from '../style'
import { createStackNavigator } from 'react-navigation'


export  class Search extends React.Component {



    constructor (props){
        super(props)
        this.state = {
            city: 'Marrakech'
        }
    }

    setState (city){
        this.setState({city})
    }

    submit () {
            this.props.navigation.navigate('Result', {city: this.state.city})
    }

    render() {
        return (
            <View style={globalStyle.view}>
                <TextInput
                style={globalStyle.textinput}
                onChangeText={(text) => this.setState(text)}
                value = {this.state.city}
                />
                <Button  style={globalStyle.button} onPress={() => this.submit()} title='rechecher' />

            </View>
        )
    }
}

export default createStackNavigator({
    Search: {
        screen:Search
    },
    Result: {
        screen:Search
    }
},{
     defaultNavigationOptions: {
        title: 'Welcome'
      }
})
