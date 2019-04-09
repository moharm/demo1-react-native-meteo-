import React from 'react'
import { Text ,ActivityIndicator, ListView} from 'react-native'
import globalStyle from '../style'
import axios from 'axios'
import WeatherRow from './Weather/Row'

export default class List extends React.Component {

    static navigationOptions = ({navigation}) => {
        
        return{
            title : `Meteo / ${navigation.state.params.city}`
        }
    }
    constructor (props) {
        super(props)
        this.state = {
            city: 'Marrakech',  //this.props.navigation.state.params.city
            report: null
        }
        this.featchWeather()
    }

    featchWeather () {

        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&units=metric&cnt=10&APPID=0226ae5be882ebedc36826e3b824b7fb`)
        .then((response) => {
            this.setState({report: response.data})            
        })

    }


    render() {
        
            if(this.state.report === null) {
                return (
                        <ActivityIndicator color={globalStyle.color} size="large"   />
                )
            } else {
                const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

                return (
                    <ListView 
                    dataSource={ds.cloneWithRows(this.state.report.list)} 
                    renderRow={(row) => <WeatherRow day={row} />}
                    />
                )
            }
        
    }

}