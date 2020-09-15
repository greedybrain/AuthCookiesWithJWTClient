import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import underscore from 'underscore'
import EntryPage from './Pages/EntryPage/containers/EntryPage';
import { helper } from './Utils/helper';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/HomePage/containers/Home';
import { useDispatch } from 'react-redux';
import { autoLoginUserThunk } from './Store/middleware/authUserMiddleware';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(autoLoginUserThunk())
  })

  return (
    <div className="App">
      <Switch>
        <Route 
          exact 
          path='/login'
          render={ props => <EntryPage {...props} />}
        /> 
        <Route 
          exact 
          path="/"
          render={props => <Home {...props} />}
        />   
      </Switch>
    </div>
  );
}

export default App;
