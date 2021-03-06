import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

import Config from '../config';
import ScreenTracking from './ScreenTrackingMiddleware';

export default (rootReducer, rootSaga) => {
    const middleware = [];
    const enhancers = [];

    middleware.push(ScreenTracking);

    const navMiddleware = createReactNavigationReduxMiddleware(
        'root',
        state => state.nav,
    );
    middleware.push(navMiddleware);

    const sagaMonitor = (Config.useReactotron) ? console.tron.createSagaMonitor() : null;
    const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
    middleware.push(sagaMiddleware);

    enhancers.push(applyMiddleware(...middleware));

    // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
    const createAppropriateStore = (Config.useReactotron) ? console.tron.createStore : createStore;
    const store = createAppropriateStore(rootReducer, compose(...enhancers));

    // kick off root saga
    const sagasManager = sagaMiddleware.run(rootSaga);

    return {
        store,
        sagasManager,
        sagaMiddleware,
    };
};
