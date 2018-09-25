import apisauce from 'apisauce';

import Config from '../config';

const create = () => {
    const config = {
        baseURL: Config.apiBaseURL,
        headers: {
            'Cache-Control': 'no-cache',
        },
        timeout: 10000,
    };
    if (Config.basicAuthorization) {
        config.headers.Authorization = `Basic ${Config.basicAuthorization}`;
    }
    const api = apisauce.create(config);

    const search = query => api.get(`?q=${query}&cx=${Config.googleApiCX}&key=${Config.googleApiKey}&num=10&imgSize=medium&searchType=image&filetype=jpg`);

    return {
        apiInstance: api,
        search,
    };
};

export default {create};
