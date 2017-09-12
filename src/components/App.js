import React from "react";
import { connect } from "react-redux";

import '../assets/stylesheets/base.styl';


// app component
export class App extends React.Component {
    componentWillMount() {
        this.props.dispatch({type: 'USERS_FETCH_LIST'});
    }

    render() {
        const {users, children} = this.props;

        if (!users.length) {
            return (
                null
            );
        }

        return (
            <div className="container">
                {children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users || [],
    };
}

export default connect(mapStateToProps)(App);