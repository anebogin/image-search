import {createNavigationReducer} from 'react-navigation-redux-helpers';
import AppNavigation from '../navigation';

const navReducer = createNavigationReducer(AppNavigation);
export default navReducer;
