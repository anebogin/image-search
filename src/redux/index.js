import {combineReducers} from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../sagas/';
import navReducer from './NavigationRedux';
import {reducer as searchReducer} from './SearchRedux';

export const reducers = combineReducers({
    nav: navReducer,
    search: searchReducer,
});

export default () => {
    let {store, sagasManager, sagaMiddleware} = configureStore(reducers, rootSaga);

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./').reducers;
            store.replaceReducer(nextRootReducer);

            const newYieldedSagas = require('../sagas').default;
            sagasManager.cancel();
            sagasManager.done.then(() => {
                sagasManager = sagaMiddleware.run(newYieldedSagas);
            });
        });
    }

    return store;
};
