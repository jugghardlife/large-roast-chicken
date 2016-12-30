import React, { Component } from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import App from './components/App';
// import Hello1 from "./components/Hello1";
// import Hello2 from "./components/Hello2";
import Home from "./components/Home";
import Post from './components/Post';
import Form from './components/Form';
import EditPost from './components/EditPost';

class Routes extends Component {
  render(){
    return(
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={App} >
            <IndexRoute component={Home} />
            <Route path='/form' component={Form} />
            <Route path='/posts/:_id' component={Post} />
            <Route path='/posts/:_id/edit' component={EditPost} />
          </Route>
        </Router>
      </div>
    )
  }
}
export default Routes;
