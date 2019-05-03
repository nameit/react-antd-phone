import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import mockData from '../Data/mockData';
import Config from '../config';

const mock = new MockAdapter(axios);

const Utils = {
  getRequest(url, params) {
    const sign = url.slice(1);
    if (Config.mock) {
      mock.onGet(url, { params }).reply(200, mockData[sign]);
    }
    return axios.get(url);
  }
};

export default Utils;
