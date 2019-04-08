import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import globalStyle from '../style'


export default class About extends React.Component {



    render() {
        return (
            <View style={globalStyle.view}>

                <Text style={globalStyle.title}> a propos du moi </Text>
                <Text> a proplklmlknlknlknlnlknlnk
                lklklklnlknlknlknlkknknlkkn
                nlnklnklnnlknllknklnlknlkn
                klnlknlknklnlknlknlknos du moi </Text>

                <Button color={globalStyle.color} onPress={() => this.search() } title='Rechercher une ville' />

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