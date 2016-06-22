import request from '../utils/request';
const localStorageyes = require('localStorage');
let localStorage;

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = localStorageyes;
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage;
}

const auth = {
  /**
  * Logs a user in, returning a promise with `true` when done
  * @param  {string} username The username of the user
  * @param  {string} password The password of the user
  */
  header: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  login(username, password) {
    // if (auth.loggedIn()) {
    //   console.log('auth.loggedIn is true');
    //   return Promise.resolve(true);
    // }
    // Post a fake request
    return request('/api/login', {
      method: 'post',
      headers: auth.header,
      body: JSON.stringify({ username, password }),
    })
      .then(response => {
        // Save token to local storage
        console.log(response);
        localStorage.token = response.data.username;
        return Promise.resolve(true);
      });
  },
  /**
  * Logs the current user out localStorage.removeItem('token')
  */
  logout() {
    return request('/api/logout').then(data => {
      if (data.data.logout) {
        localStorage.removeItem('token');
      }
    });
  },
  /**
  * Checks if a user is logged in
  */
  loggedIn() {
    return !!localStorage.token;
  },
  /**
  * Registers a user and then logs them in
  * @param  {string} username The username of the user
  * @param  {string} password The password of the user
  */
  register(username, password) {
    // Post a fake request
    return request('/api/register', {
      method: 'post',
      headers: auth.header,
      body: JSON.stringify({ username, password }),
    })
      // Log user in after registering
      .then(data => data.data.account.username
         );
  },
  onChange() {},
};

export default auth;
