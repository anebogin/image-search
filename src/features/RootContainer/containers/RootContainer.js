import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import ReduxNavigation from '../../../navigation/ReduxNavigation';
import styles from '../styles/RootContainerStyles';

const RootContainer = () => {
    return (
        <View style={styles.applicationView}>
            <ReduxNavigation />
        </View>
    );
};

export default connect(state => ({
    nav: state.nav,
}), undefined)(RootContainer);
