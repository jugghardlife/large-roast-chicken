import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router';

class Form extends Component {
  constructor(){
    super();
    this.state={
      work:'false'
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({work:true})
    if(this.refs.title.value==''||this.refs.content.value==''){
      alert("不能为空，请填写数据");
    }else {
      axios.post('http://localhost:3000/posts',{
        title:this.refs.title.value,
        content:this.refs.content.value
      })
      .then((res)=>
        {this.props.router.push('/')}
      )
      .catch((error)=>
        {console.log('提交失败')}
      )
    }
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <lable >标题</lable>
          <input type='text' ref='title' defaultValue={this.props.posts?this.props.post.title:''}/>
        </div>
        <div>
          <lable >文章</lable>
          <input type='text' ref='content' defaultValue={this.props.posts?this.props.post.content:''}/>
        </div>
          <input type='submit' value='提交' disabled={false}/>
          <Link to='/'>取消</Link>
      </form>
    )
  }
}

// Form.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

export default Form;
