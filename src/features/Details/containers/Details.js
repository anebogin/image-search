import React, {PureComponent} from 'react';
import {
    View, Text, Image, Button, TouchableOpacity,
} from 'react-native';

import styles from './Details.styles';

class Details extends PureComponent {
    render() {
        const {nav} = this.props;
        console.log(nav);
        return (
            <View style={styles.container}>
                <Text>1111</Text>
            </View>
        );
    }
}

export default Details;
