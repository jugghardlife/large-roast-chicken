import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  constructor(){
    super();
    this.state={
      title:{}
    }
  }
  componentWillMount() {
    axios.get(`http://localhost:3000/posts/${this.props.params._id}`)
      .then(res => this.setState({
        title:res.data.post
      }))
    }
  render(){
    return(
      <h1>
        <div className="post-title">
          {this.state.title.title}
        </div>
        <div className="post-content">
          {this.state.title.content}
        </div>
      </h1>
    )
  }
}

export default Post;
