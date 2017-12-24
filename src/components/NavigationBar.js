import React from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { logout } from 'redux/actions/auth-actions';
import { openModal, hideModal } from 'redux/actions/modal-actions'
import { addFlashMessage } from 'redux/actions/flash-actions';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: '0',
            height: '0',
            scrolled: false
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.updateWindowDimensions)
        this.updateWindowDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.updateWindowDimensions);
    }


    handleScroll(event) {
        const viewHeight = window.innerHeight;
        if(event.srcElement.scrollingElement.scrollTop > (this.state.height*.75)) {
            this.setState({
                scrolled: true
            })
        } else {
            this.setState({
                scrolled: false
            })
        }
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    
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
        const {openModal} = this.props;
        const navClasses = classnames(
            'navigation',
            {
                'navigation--scrolled': this.state.scrolled
            }
        )
        const guestLinks = (
            <ul className="navigation__buttons-container">
                <li>
                    <div className="btn btn--small btn--white" onClick={() => openModal('AUTH')}>Sign In</div>
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
            <nav className={navClasses}>
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
    addFlashMessage: PropTypes.func.isRequired,
    openModal: PropTypes.func,
    hideModal: PropTypes.func
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout, addFlashMessage, openModal, hideModal })(NavigationBar);