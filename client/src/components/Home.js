import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import filter from 'lodash/fp/filter';

class Home extends Component {
  constructor(){
    super();
    this.state={
      posts:[]
    }
  }
  componentWillMount(){
    axios.get('http://localhost:3000/posts')
    .then(res =>
      this.setState({
      posts:res.data.posts
    }))
  }
  handeleClick(id){
    axios.delete(`http://localhost:3000/posts/${id}`)
    .then(this.filterPost(id))
  }
  filterPost(id){
    const posts = filter((post) => {
      return post._id !== id
    }, this.state.posts);
    this.setState({ posts: posts });
  }
  render(){
    let PostsTitle = this.state.posts.map((item,index) =>
    <div className='post-card' key={index}>
      <Link to={`/posts/${item._id}`} >{item.title}</Link>
      <Link to={`/posts/${item._id}/edit`} className="edit">编辑</Link>
      <Link to='' onClick={this.handeleClick.bind(this,item._id)}>删除</Link>
    </div>
    )
    return(
      <div>
        <Link to='/form' >发布</Link>
        <div className='posts'>
          {PostsTitle}
        </div>
      </div>
    )
  }
}

export default Home;
