import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Create from './components/signup.component';
import SignIn from './components/signin.component';
import Landing from './components/LandingPage.component';
import Dashboard from './components/dashboard.component';




class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Landing}/>
                        <Route  path='/create' component={Create}/>
                        <Route  path='/signIn' component={SignIn}/>
                        <Route  path='/dashboard' component={Dashboard}/>
                        <Route  path='/logout' component={Landing}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;