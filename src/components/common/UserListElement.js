import React, { PropTypes } from "react";
import { Link } from "react-router";

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
          action
        </td>
      </tr>
    );
  }
}

// prop checks
UserListElement.propTypes = {
  user: PropTypes.object.isRequired,
}
