import React from 'react'
import {View, Text} from 'react-native'
import PropTypes from 'prop-types'


export default class Row extends React.Component {
    

    Render () {
    
        return (
            <View>
                <Text>{this.props.day.main.temp}C</Text>
            </View>
        )
    }
}


// Row.propTypes = {
//     day: PropTypes.object,
//     // index: PropTypes.number
// }