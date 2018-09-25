import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
    searchRequest: ['query'],
    searchSuccess: ['data', 'headers'],
    searchFailure: null,
});

export const SearchTypes = Types;
export default Creators;

/**
 * item:
 * {
   "kind": "customsearch#result",
   "title": "HWC Cars & Vehicles | Hot Wheels Collectors",
   "htmlTitle": "HWC \u003cb\u003eCars\u003c/b\u003e &amp; Vehicles | Hot Wheels Collectors",
   "link": "https://images.mattel.com/scene7//wcsstore/MattelCAS/DMH99_01?$ossmallindex$&storeId=10151&SKU=DMH99",
   "displayLink": "hotwheelscollectors.mattel.com",
   "snippet": "HWC Cars & Vehicles | Hot Wheels Collectors",
   "htmlSnippet": "HWC \u003cb\u003eCars\u003c/b\u003e &amp; Vehicles | Hot Wheels Collectors",
   "mime": "image/",
   "image": {
    "contextLink": "https://hotwheelscollectors.mattel.com/shop/en-us/hwc/collector-non-series-cars",
    "height": 300,
    "width": 300,
    "byteSize": 12007,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJ8pUVYuo1B-g5b4DJPYRo0Y3F4b9HXFWT-YVpAzxbe-QL5dxN_0V7bA",
    "thumbnailHeight": 116,
    "thumbnailWidth": 116
   }
  }
 */

export const INITIAL_STATE = Immutable({
    loaded: false,
    fetching: null,
    error: null,
    items: [],
});

export const searchRequest = (state, action) => {
    const newState = state.merge({fetching: true});
    return newState;
};
export const searchSuccess = (state, action) => {
    const {data} = action;
    const items = data.items || INITIAL_STATE.items;
    return state.merge({
        fetching: false, loaded: true, items
    }, {deep: true});
};
export const searchFailure = (state) => {
    return state.merge({fetching: false, error: true});
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SEARCH_REQUEST]: searchRequest,
    [Types.SEARCH_SUCCESS]: searchSuccess,
    [Types.SEARCH_FAILURE]: searchFailure,
});
