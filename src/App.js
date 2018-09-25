// @flow

import React, {Component} from 'react';
import {
    Platform, AppRegistry,
    Text, StatusBar
} from 'react-native';
import {Provider} from 'react-redux';

import Config from './config';
import './config/ReactotronConfig';
import createStore from './redux';

import {RootContainer} from './features';

const store = createStore();

class App extends Component {
    componentDidMount() {
        this.setStatusBar();
    }

    getContent(): Component {
        return <RootContainer />;
    }

    setStatusBar() {
        // if (Platform.OS === 'android') {
        //     StatusBar.setBackgroundColor(Colors.statusBarColor());
        // }
        // StatusBar.setBarStyle('light-content');
    }

    render(): Component {
        return (
            <Provider store={store}>
                <RootContainer />
            </Provider>
        );
    }
}

export default function APP() {
    AppRegistry.registerComponent(
        'app',
        (): Component => ((Config.useReactotron) ? console.tron.overlay(App) : App)
    );
}
