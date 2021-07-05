/* eslint-disable no-dupe-class-members */
import axios from 'axios';

class Client {

  handleLogin(error) {
    if(error.status===401) {
      return true;
    }
    return false;
  }

  async sendRequest(config) {
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    }
    try {
      let response = await axios(config);
      let {data} = response;
      return data;
    } catch (error) {
      if(!this.handleLogin()) {
        throw error;
      }
    }
  }

  async get(url, params, headers = {}) {
    return await this.sendRequest({
      method: 'get',
      url: url,
      params: params,
      headers: headers
    });
  }

  async post(url, body, headers) {
    return await this.sendRequest({
      method: 'post',
      url: url,
      data: body,
      headers: headers
    });
  }

  async put(url, body, headers) {
    return await this.sendRequest({
      method: 'put',
      url: url,
      data: body,
      headers: headers
    });
  }

}

export default Client;