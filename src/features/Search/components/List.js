import React, {PureComponent} from 'react';
import {FlatList, Text} from 'react-native';

import styles from './List.styles';
import Item from './Item';

class List extends PureComponent {
    renderItem = (props) => {
        const {item, index} = props;
        return (
            <Item item={item} index={index} />
        );
    }

    handleKeyExtractor = (item, index) => index.toString()

    render() {
        const {items} = this.props;
        return (
            <FlatList
                style={styles.container}
                data={items}
                renderItem={this.renderItem}
                keyExtractor={this.handleKeyExtractor}
            />
        );
    }
}

export default List;
