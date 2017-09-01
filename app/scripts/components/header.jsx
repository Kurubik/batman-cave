import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <header className="clearfix">
      Application Name
      <nav className="clearfix">
        <div className="nav-item">
          <Link to="/home" activeClassName="active">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/info" activeClassName="active">Info</Link>
        </div>
          <div className="nav-item">
              <Link to="/bob" activeClassName="active">Bob</Link>
          </div>
      </nav>
    </header>
  )
};

export default Header;