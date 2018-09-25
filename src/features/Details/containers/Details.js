import React, {PureComponent} from 'react';
import {
    View, Text, Image, Button, TouchableOpacity, StatusBar
} from 'react-native';
import {connect} from 'react-redux';

import styles from './Details.styles';

class Details extends PureComponent {
    render() {
        const {nav} = this.props;
        const {params: {item}} = nav.routes[nav.index];
        console.log(item);
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
                <Text>1111</Text>
            </View>
        );
    }
}

const mapStateTioProps = state => ({
    nav: state.nav
});

export default connect(mapStateTioProps)(Details);
