import {StyleSheet, Platform} from 'react-native';

export const ITEM_WIDTH = 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    content: {
        position: 'absolute',
        width: '100%',
        height: 140,
        backgroundColor: 'rgba(255,255,255,0.5)',
        bottom: 0,
        padding: 15,
    },
    text: {
        flex: 1,
        marginBottom: 15,
    },
    backButton: {
        position: 'absolute',
        top: (Platform.OS === 'ios') ? 35 : 15,
        left: 15
    },
    backButtonText: {
        color: 'blue'
    }
});

export default styles;
