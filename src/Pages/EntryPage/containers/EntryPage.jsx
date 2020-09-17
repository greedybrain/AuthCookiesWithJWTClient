import React, { Component } from 'react'
import Login from '../components/Login'

export default class EntryPage extends Component {
        render() {
                return (
                        <div className="entry_page">
                                <div className="login_form">
                                        <Login history={this.props.history} />
                                </div>
                                <div className="signup_form">

                                </div>
                        </div>
                )
        }
}
