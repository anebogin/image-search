import {takeLatest, all} from 'redux-saga/effects';
import Api from '../api';
import {SearchTypes} from '../redux/SearchRedux';
import {search} from './SearchSagas';
import ApiFixtures from '../api/fixtures';
import Config from '../config';

const api = (Config.useFixtures) ? ApiFixtures : Api.create();

export default function* root() {
    yield all([
        takeLatest(SearchTypes.SEARCH_REQUEST, search, api),
    ]);
}
