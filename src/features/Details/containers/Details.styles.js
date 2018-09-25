import {StyleSheet, Platform} from 'react-native';

export const ITEM_WIDTH = 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#fafafa',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default styles;
