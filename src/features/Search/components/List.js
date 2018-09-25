import React, {PureComponent} from 'react';
import {FlatList} from 'react-native';

import styles from './List.styles';
import Item from './Item';

const ITEM_WIDTH = 110;

class List extends PureComponent {
    state = {
        width: 0,
        columns: 2,
    }

    renderItem = (props) => {
        const {item, index} = props;
        const {width, columns} = this.state;
        const columnWidth = Math.floor(width / columns);
        return (
            <Item
                item={item}
                index={index}
                width={columnWidth}
                onPress={this.handleOnPressItem}
            />
        );
    }

    handleOnPressItem = (item) => {
        const {onPressItem} = this.props;
        if (typeof onPressItem === 'function') onPressItem(item);
    }

    handleKeyExtractor = (item, index) => index.toString()

    handleOnLayout = (e) => {
        const {width} = e.nativeEvent.layout;
        const columns = Math.floor(width / ITEM_WIDTH);
        this.setState({width, columns});
    }

    render() {
        const {items} = this.props;
        const {columns} = this.state;
        return (
            <FlatList
                onLayout={this.handleOnLayout}
                style={styles.container}
                data={items}
                renderItem={this.renderItem}
                keyExtractor={this.handleKeyExtractor}
                horizontal={false}
                numColumns={columns || 2}
                key={columns}
            />
        );
    }
}

export default List;
