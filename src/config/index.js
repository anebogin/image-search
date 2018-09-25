/* global __DEV__ */
import {Text} from 'react-native';

Text.defaultProps.allowFontScaling = true;
  
module.exports = {
    appTitle: 'ImageSearch',
    useFixtures: false,
    useReactotron: __DEV__,
    debug: __DEV__,
    bugsnagKey: 'bba19f81b711156170f886fabdacae34',
    googleApiCX: '002329385710197292041:lwoezcwlpmk',
    googleApiKey: 'AIzaSyDZ0nt0aIRhmbdU2OuNatdsBmAaGVgFRIg',
    apiBaseURL: 'https://www.googleapis.com/customsearch/v1'
};
