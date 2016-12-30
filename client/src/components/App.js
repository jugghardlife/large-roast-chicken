import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends Component {
  render(){
    return(
      <div>
        <h1 className='home-title'>
          <Link to='/' className='home'>Home</Link>
        </h1>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
