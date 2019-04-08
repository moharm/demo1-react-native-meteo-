import React from 'react';
import { View, StatusBar} from 'react-native';
import About from './components/About'
import Search from './components/search'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


export class App extends React.Component {

  render() {
    return (
      <Tabs />
     );
  }
}

    const TabNavigator = createBottomTabNavigator({
      Home: Search,
      AboutApp: About,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            // Sometimes we want to add badges to some icons. 
            // You can check the implementation below.
          } else if (routeName === 'AboutApp') {
            iconName = `ios-options`;
          }
    
          // You can return any component that you like here!
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    });
    
    export default createAppContainer(TabNavigator);


