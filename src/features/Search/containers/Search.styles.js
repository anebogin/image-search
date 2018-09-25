import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#fafafa',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
    },
    input: {
        marginTop: 10,
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 5,
    }
});

export default styles;
