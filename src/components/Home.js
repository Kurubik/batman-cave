import React from "react";
import UserList from "./common/UserList";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <h4>Batman</h4>
        <UserList />
      </div>
    );
  }
}
