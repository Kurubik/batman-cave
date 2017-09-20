import React from "react";
import UserList from "./common/UserList";
import UserEdit from "./common/UserEdit";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <UserEdit />
        <div className="wrapper">
            <h4>Batman</h4>
            <UserList />
        </div>
      </div>
    );
  }
}
