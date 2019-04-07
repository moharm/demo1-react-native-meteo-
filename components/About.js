import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export default class About extends React.Component {

    render() {
        return (
            <View style={style.view}>
                <Text style={style.title}> a propos du moi </Text>
                <Text> a proplklmlknlknlknlnlknlnk
                lklklklnlknlknlknlkknknlkkn
                nlnklnklnnlknllknklnlknlkn
                klnlknlknklnlknlknlknos du moi </Text>    
            </View>
    )
    }
}

const style = StyleSheet.create ({
    view : {
        margin: 20
    },
    title :  {
        fontSize : 30,
        marginBottom: 20,
        marginTop: 52,
    }

})