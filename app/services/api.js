import Service from '@ember/service';
import ENV from 'employee/config/environment';

export default class ApiService extends Service {
  async baseRequest(
    apiEndpoint = '/',
    method = 'GET',
    headers = { 'Content-Type': 'application/json' },
    body = null
  ) {
    // Default options are marked with *
    const config = {
      method, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers,
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    };
    if (body) {
      config.body = body;
    }
    const response = await fetch(ENV.apiUrl + apiEndpoint, config);
    return await response.json(); // parses JSON response into native JavaScript objects
  }

  async post(
    apiEndpoint = '/',
    payload = {},
    headers = { 'Content-Type': 'application/json' }
  ) {
    if (headers['Content-Type'].includes('json')) {
      payload = JSON.stringify(payload);
    }
    return await this.baseRequest(apiEndpoint, 'POST', headers, payload);
  }
  async get(
    apiEndpoint = '/',
    headers = { 'Content-Type': 'application/json' }
  ) {
    return await this.baseRequest(apiEndpoint, 'GET', headers);
  }
  async put(
    apiEndpoint = '/',
    payload = {},
    headers = { 'Content-Type': 'application/json' }
  ) {
    if (headers['Content-Type'].includes('json')) {
      payload = JSON.stringify(payload);
    }
    return await this.baseRequest(apiEndpoint, 'PUT', headers, payload);
  }
  async delete(
    apiEndpoint = '/',
    payload = {},
    headers = { 'Content-Type': 'application/json' }
  ) {
    if (headers['Content-Type'].includes('json')) {
      payload = JSON.stringify(payload);
    }
    return await this.baseRequest(apiEndpoint, 'DELETE', headers, payload);
  }
}
