import React from 'react';
import {Text} from 'react-native';

import styles from './Item.styles';

const Item = (props) => {
    const {item, index} = props;
    return (
        <Text>{item.title}</Text>
    );
};

export default Item;
