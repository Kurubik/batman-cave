import React, { PropTypes } from "react";
import { Link } from "react-router";
var FontAwesome = require('react-fontawesome');

// User List Element component
export default class UserListElement extends React.Component {
  // render
  render() {
    const {user} = this.props;
    return (
      <tr>
        <td>#{user._id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
            <Link to={'user-edit/' + user._id}>
                <span>
                    <FontAwesome name='fa-pencil-square-o' />
                </span>
            </Link>
        </td>
      </tr>
    );
  }
}

// prop checks
UserListElement.propTypes = {
  user: PropTypes.object.isRequired,
}
