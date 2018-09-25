import {put, call} from 'redux-saga/effects';
import SearchActions from '../redux/SearchRedux';

export function* search(api, action) {
    const {query} = action;

    const response = yield call(() => api.search(query));

    if (response.ok) {
        yield put(SearchActions.searchSuccess(response.data, response.headers));
    } else {
        yield put(SearchActions.searchFailure());
    }

    return response;
}
