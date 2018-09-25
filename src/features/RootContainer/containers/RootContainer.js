import React from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {connect} from 'react-redux';

import ReduxNavigation from '../../../navigation/ReduxNavigation';
import styles from '../styles/RootContainerStyles';

const RootContainer = () => {
    StatusBar.setBarStyle('dark-content');
    if (Platform.os === 'android') StatusBar.setBackgroundColor('#fafafa');
    return (
        <View style={styles.applicationView}>
            <ReduxNavigation />
        </View>
    );
};

export default connect(state => ({
    nav: state.nav,
}), undefined)(RootContainer);
