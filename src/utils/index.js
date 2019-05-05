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
  },
  postRequest(url, data) {
    if (Config.mock) {
      const sign = url.slice(1);
      // 返回一个数组[status, data, headers]
      this.mockAdapter.onPost(url).reply(200, mockData[sign]);
    }
    return axios.post(url, data);
  }
};

export default Utils;
