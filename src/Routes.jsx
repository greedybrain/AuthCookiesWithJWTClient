import React from 'react'
import EntryPage from './Pages/EntryPage/containers/EntryPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Pages/HomePage/containers/Home';

const Routes = ({ loggedIn }) => {
        return (
                <Switch>
                        <Route 
                                exact 
                                path='/login'
                                render={ routerProps => loggedIn ? <Redirect to="/" from="/login" /> : <EntryPage {...routerProps} />}
                        /> 
                        <Route 
                                exact 
                                path="/"
                                render={routerProps => <Home {...routerProps} />}
                        />   
                </Switch>
        )
}

const mapStateToProps  = state => ({
        loggedIn: state.loggedIn
})

export default connect(mapStateToProps, null)(Routes)
