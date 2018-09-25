import React, {PureComponent} from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';

import styles, {ITEM_WIDTH} from './Item.styles';

class Item extends PureComponent {
    handleOnPress = () => {
        console.log('===== press ');
    }

    render() {
        const {item, width} = this.props;
        const margin = (width - ITEM_WIDTH) / 2 - 1;
        return (
            <TouchableOpacity
                style={[styles.container, {marginLeft: margin, marginRight: margin}]}
                onPress={this.handleOnPress}
            >
                <Image
                    source={{uri: item.link}}
                    resizeMode="cover"
                    style={styles.image}
                />
                <Text>{item.title}</Text>
            </TouchableOpacity>
        );
    }
};

export default Item;
