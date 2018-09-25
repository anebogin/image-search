import { StyleSheet, Platform } from 'react-native';
import { Colors } from '../../themes/';

export default StyleSheet.create({
   header: {
      backgroundColor: Colors.brandPrimary,
   },
   tabBar: {
      backgroundColor: Colors.brandPrimary,
      paddingTop: (Platform.OS === 'ios')? 25 : 0,
   }
});
