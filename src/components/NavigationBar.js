import React from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/authActions';
import { addFlashMessage } from '../actions/flashMessages';

class NavigationBar extends React.Component {
    logout(e) {
        e.preventDefault();
        this.props.logout()
        if(localStorage.jwtToken) {
            this.props.addFlashMessage({
                type: 'error',
                text: 'Something went wrong!'
            })
        } else {
            this.props.addFlashMessage({
                type: 'success',
                text: 'Successfully logged out.'
            })
        }
    }

    render() {
        const { isAuthenticated } = this.props.auth

        const guestLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        )

        const userLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <a href="#" onClick={this.logout.bind(this)}>Logout</a>
                </li>
            </ul>
        )
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Movie Night</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        { isAuthenticated ? userLinks : guestLinks }
                    </div>
                </div>
            </nav>
        )
    }
}

NavigationBar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout, addFlashMessage })(NavigationBar);