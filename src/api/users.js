// API Users static class
import axios from 'axios'

export default class ApiUsers {
  // get a list of users
  static getList() {
      return new Promise(resolve => {
          axios.post('/get-user-list')
              .then(function (response) {
                  return resolve(response.data);
              })
              .catch(function (error) {
                  console.log(error);
                  return error;
              });
      });
  }

  // add/edit a user
  static addEdit() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 1000);
    });
  }

  // delete a user
  static delete() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 500);
    });
  }
}
