import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import UserListElement from "./UserListElement";

// User list component
export class UserList extends React.Component {
  // constructor
  constructor(props) {
    super(props);
  }

  render() {
    const {users} = this.props;

    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {users.map((user, index) => {
              return (
                  <UserListElement key={index} user={user} />
              );
          })}
          </tbody>
        </table>
      </div>
    );
  }
  //
  // // change the user lists' current page
  // changePage(page) {
  //   this.props.dispatch(push('/?page=' + page));
  // }
  //
  // // show the delete user prompt
  // showDelete(user) {
  //   // change the local ui state
  //   this.setState({
  //     delete_show: true,
  //     delete_user: user,
  //   });
  // }
  //
  // // hide the delete user prompt
  // hideDelete() {
  //   // change the local ui state
  //   this.setState({
  //     delete_show: false,
  //     delete_user: {},
  //   });
  // }
  //
  // // delete the user
  // userDelete() {
  //   // delete the user
  //   this.props.dispatch({
  //     type: 'USERS_DELETE',
  //     user_id: this.state.delete_user.id,
  //   });
  //
  //   // hide the prompt
  //   this.hideDelete();
  // }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}
export default connect(mapStateToProps)(UserList);
