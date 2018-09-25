import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
    applicationView: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingTop: (Platform.os === 'ios') ? 20 : 0,
    },
});
