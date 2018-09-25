import {createStackNavigator} from 'react-navigation';

// import styles from './styles/NavigationStyles';
import {Search} from '../features/Search';

const MainNavigator = createStackNavigator({
    Search: { screen: Search },
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Search',
    navigationOptions: {
        // headerStyle: styles.header,
    },
});

export default MainNavigator;
