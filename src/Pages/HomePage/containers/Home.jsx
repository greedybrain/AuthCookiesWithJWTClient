import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUserThunk } from '../../../Store/middleware/authUserMiddleware';

class Home extends Component {
        render() {
                return (
                        <div>
                                HOME PAGE
                                <button onClick={() => this.props.logout()}>Logout</button>
                        </div>
                );
        }
}

const mapDispatchToProps = dispatch => ({
        logout: () => dispatch(logoutUserThunk())
})

export default connect(null, mapDispatchToProps)(Home);