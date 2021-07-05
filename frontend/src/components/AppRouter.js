import { Component } from 'react';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer';
import SampleContainer from '../containers/SampleContainer';
import Signup from './Signup';
import Home from './Home';
import _ from 'lodash';


let routes = [
  {
    path: "/login",
    component: LoginContainer
  },
  {
    path: "/signup",
    component: Signup
  },
  {
    path:"/",
    component: SampleContainer
  }
]

class AppRouter extends Component{
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Router>
        <Switch>
          {
            _.map(routes, (route) => (
              <Route 
              path={route.path} 
              component={route.component}
              />
            ) )
          }
        </Switch>
      </Router>
    )
  }

}

export default AppRouter;
