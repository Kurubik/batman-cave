// API Users static class
import axios from 'axios'

export default class ApiUsers {
  // get a list of users
  static getList() {
      return new Promise(resolve => {
          // setTimeout(() => {
          //     // build some dummy users list
          //     let users = [];
          //     for (let x = 1; x <= 28; x++) {
          //         users.push({
          //             id: x,
          //             username: 'Johny ' + x,
          //             job: 'Employee ' + x,
          //         });
          //     }
          //     resolve(users);
          // }, 6000);
          axios.post('/get-user-list')
              .then(function (response) {
                  return  resolve(response.data);
              })
              .catch(function (error) {
                  console.log(error);
                  return error;
              });
      });
      // axios.post('/get-user-list')
      //     .then(function (response) {
      //         return  response.data;
      //     })
      //     .catch(function (error) {
      //         console.log(error);
      //         return error;
      //     });
      // return new Promise(resolve => {
      //     const xhr = new XMLHttpRequest();
      //     xhr.open("POST", '/get-user-list');
      //     xhr.onload = () => {
      //         console.log(xhr.responseText);
      //         resolve(xhr.responseText);
      //     };
      //     xhr.onerror = () => reject(xhr.statusText);
      //     xhr.send();
      //
      // });
    // for (let x = 1; x <= 28; x++) {
    //     users.push({
    //         id: x,
    //         username: 'Johny ' + x,
    //         job: 'Employee ' + x,
    //     });
    // }
    //   let users = null;
    //   axios.post('/get-user-list')
    //       .then(function (response) {
    //           users = response.data;
    //           console.log(users);
    //           return users;
    //       })
    //       .catch(function (error) {
    //           console.log(error);
    //           return Promise.reject(error);
    //       });
    //   setTimeout(() => {
    //       // do something here
    //       resolve();
    //   }, 1000);
    //   return users;
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
