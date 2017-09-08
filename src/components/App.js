import React from "react";

import '../assets/stylesheets/base.styl';


// app component
export default class App extends React.Component {
    // render
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}
