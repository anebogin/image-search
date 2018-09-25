import React, {PureComponent} from 'react';
import {
    View, Text, Image, Button, TouchableOpacity, StatusBar, Linking, Alert
} from 'react-native';
import {connect} from 'react-redux';

import styles from './Details.styles';

class Details extends PureComponent {
    handleVisit = () => {
        const {nav} = this.props;
        const {params: {item}} = nav.routes[nav.index];
        const url = item.image.contextLink;
        Linking.canOpenURL(url).then((supported) => {
            if (supported) {
                Linking.openURL(url);
            } else {
                Alert(`Don't know how to open URI: ${url}`);
            }
        });
    }

    handleOnBackPress = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    render() {
        const {nav} = this.props;
        const {params: {item}} = nav.routes[nav.index];
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
                <Image
                    source={{uri: item.link}}
                    resizeMode="contain"
                    style={styles.image}
                />
                <View style={styles.content}>
                    <Text
                        style={styles.text}
                        numberOfLines={2}
                    >
                        {item.title}
                    </Text>
                    <Button
                        onPress={this.handleVisit}
                        title="Visit"
                    />
                </View>
                <TouchableOpacity
                    onPress={this.handleOnBackPress}
                    style={styles.backButton}
                >
                    <Text style={styles.backButtonText}>{'< Back'}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateTioProps = state => ({
    nav: state.nav
});

export default connect(mapStateTioProps)(Details);
