import {StyleSheet} from 'react-native';

export const ITEM_WIDTH = 100;

const styles = StyleSheet.create({
    container: {
        width: ITEM_WIDTH,
        height: 100,
        elevation: 3,
        marginRight: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        backgroundColor: '#fff',
    },
    image: {
        width: 100,
        height: 80
    }
});

export default styles;
