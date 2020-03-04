import { Button } from 'reactstrap';
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Login from './Login/Login';
import Authent from './Authentication/Auhent';
import Dashboard from './Dashboard/Dashboard';
import Accueil from './Accueil/Accueil';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Accueil}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/authent' component={Authent}/>
      </div>
    );
  }
}

export default App;