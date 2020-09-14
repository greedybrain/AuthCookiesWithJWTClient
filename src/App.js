import React from 'react';
import './App.css';
import axios from 'axios'
import underscore from 'underscore'
import EntryPage from './Pages/EntryPage/containers/EntryPage';
import { helper } from './Utils/helper';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [userData, setUserData] = useState({})

  const { baseUrl, loggedIn, login, logout } = helper.myEndpoints
  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(
        `${baseUrl}${login}`,
        { email, password },
        { withCredentials: true }
      )
      setUserData(response.data.user.data)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/login'>
          <EntryPage handleLogin={handleLogin} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
