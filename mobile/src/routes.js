import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

export default Routes = createAppContainer(
    createStackNavigator({
        Main : {
            screen: Main,
            navigationOptions: {
                title: "DevRadar",
                headerTitleAlign: 'center'
            }
        },
        Profile  : {
            screen: Profile,
            navigationOptions: {
                title: "Perfil no GitHub",
                headerTitleAlign: 'center'
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#7D40E7',
            }
        }
    })
);