import React, { Component } from 'react';
import axios from 'axios';
import isEmpty from 'lodash/fp/isEmpty';
import {Link} from 'react-router';

class EditPost extends Component {
  constructor(){
    super();
    this.state={
      title:'',
      content:'',
      work:'false'
    }
  }
  componentWillMount() {
    axios.get(`http://localhost:3000/posts/${this.props.params._id}`)
      .then(res => this.setState({
        title:res.data.post.title,
        content:res.data.post.content
      }))
    }
  handleSubmit(e){
    e.preventDefault();
    this.setState({work:true});
    axios.put(`http://localhost:3000/posts/${this.props.params._id}`,{
      title:this.refs.title.value,
      content:this.refs.content.value
    })
    .then((res)=>
      {this.props.router.push('/')}
    )
    .catch((error)=>
      {console.log(error)}
    )
  }
  handleChange(e){
    this.setState({title:e.target.value})
  }
  handleChange1(e){
    this.setState({content:e.target.value})
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <lable >标题</lable>
            <input type='text' ref='title' value={this.state.title} onChange={this.handleChange.bind(this)}/>
          </div>
          <div>
            <lable >文章</lable>
            <input type='text' ref='content' value={this.state.content} onChange={this.handleChange1.bind(this)}/>
          </div>
          <input type='submit' value='更新文章' disabled={false}/>
          <Link to='/'>取消</Link>
        </form>
      </div>
    )
  }
}

export default EditPost;
