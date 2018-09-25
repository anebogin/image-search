import Immutable from 'seamless-immutable';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

import Config from './';

if (Config.useReactotron) {
    Reactotron
        .configure({
            name: Config.appTitle,
            // host: '127.0.0.1',
        })
        .useReactNative()
        .use(reduxPlugin({ onRestore: Immutable }))
        .use(sagaPlugin())
        .connect();

    Reactotron.clear();
    console.tron = Reactotron;
}
