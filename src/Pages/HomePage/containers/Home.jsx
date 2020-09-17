import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUserThunk } from '../../../Store/middleware/authUserMiddleware';

class Home extends Component {

        handleLogout = () => {
                this.props.logout()
                this.props.history.push('/login')
        }

        render() {
                return (
                        <div>
                                HOME PAGE
                                {
                                        this.props.loggedIn
                                        ? // yes
                                        (<button onClick={this.handleLogout}>Logout</button>)
                                        : //no
                                        (null)
                                }
                        </div>
                );
        }
}

const mapStateToProps = state => ({
        lastStatusCheck: state.lastStatusCheck,
        loggedIn: state.loggedIn
})

const mapDispatchToProps = dispatch => ({
        logout: () => dispatch(logoutUserThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);