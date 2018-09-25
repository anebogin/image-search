import React from 'react';
import {connect} from 'react-redux';
import {reduxifyNavigator} from 'react-navigation-redux-helpers';

import AppNavigation from './index';

export default function ReduxNavigation() {
    const App = reduxifyNavigator(AppNavigation, 'root');
    const mapStateToProps = state => ({
        state: state.nav,
    });
    const AppWithNavigationState = connect(mapStateToProps)(App);

    return <AppWithNavigationState />;
}
