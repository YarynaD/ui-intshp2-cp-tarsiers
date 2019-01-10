import axios from 'axios';

const baseUrl = 'http://localhost:3300';

class HttpService {
  constructor() {
    window.onerror = (message, file, line) => {
      console.log(message, file, line);
    };
  }

  get(url) {
    const source = baseUrl + url;

    axios
      .get(source)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  post(url, data) {
    const source = baseUrl + url;

    return axios
      .post(source, data)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  put(url, data, options) {
    axios
      .put(url, data, options)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  patch(url, data, options) {
    return axios
      .patch(url, data, options)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  delete(url, options) {
    axios
      .delete(url, options)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  create(options) {
    return axios.create(options);
  }
}
// test comment
export default new HttpService();
