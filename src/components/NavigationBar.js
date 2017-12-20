import React from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from 'redux/actions/auth-actions';
import { addFlashMessage } from 'redux/actions/flash-actions';

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
            <ul className="navigation__buttons-container">
                <li>
                    <Link className="btn btn--small btn--white" to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link className="btn btn--small btn--secondary" to="/login">Login</Link>
                </li>
            </ul>
        )

        const userLinks = (
            <ul className="navigation__buttons-container">
                <li>
                    <a href="#" className="btn btn--small btn--secondary" onClick={this.logout.bind(this)}>Logout</a>
                </li>
            </ul>
        )
        return (
            <nav className="navigation">
                <div className="navigation__title">
                    <Link to="/" className="navigation__logo">Movie Night</Link>
                </div>
                <div className="navigation__buttons">
                    { isAuthenticated ? userLinks : guestLinks }
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