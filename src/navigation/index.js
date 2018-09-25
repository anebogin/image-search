import {createStackNavigator} from 'react-navigation';

import {Search} from '../features/Search';
import {Details} from '../features/Details';

const MainNavigator = createStackNavigator({
    Search: { screen: Search },
    Details: { screen: Details },
}, {
    headerMode: 'none',
    initialRouteName: 'Search',
    navigationOptions: {
        // headerStyle: styles.header,
    },
});

export default MainNavigator;
