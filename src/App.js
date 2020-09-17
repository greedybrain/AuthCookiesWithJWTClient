import React, { useEffect } from 'react';
import './App.css';
import { connect, useDispatch } from 'react-redux';
import { checkIfIdled, checkUserLoggedInStatusThunk, logoutUserThunk } from './Store/middleware/authUserMiddleware';
import Routes from './Routes';
import moment from 'moment'

function App(props) {
  const dispatch = useDispatch()

  
  
  useEffect(() => {
    dispatch(checkUserLoggedInStatusThunk())
    return () => {
      clearInterval(setIdleTimer)
    }
  },)

  const setIdleTimer = setInterval(() => {
    dispatch(checkIfIdled())
  }, 1000);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    lastStatusCheckCheck: state.lastStatusCheck,
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, null)(App);
