const Post = require('./models/post');

module.exports = function(app){
  app.get('/', function(req, res){
    res.send('hello world');
  });

  app.get('/posts',function(req,res){
    Post.find().exec(function(err, posts){
      res.json({posts});
    });
  })

  app.get('/posts/:id',function(req,res){
    Post.findById(req.params.id,function(err,post){
      if(err) return console.log(err);
      res.json({post})
    })
  })

  // app.put('/posts/:id',function(req,res){
  //   Post.findById(req.params.id,function(err,post){
  //     if(err) return res.status(500).json(err.message);
  //     for (prop in req.body){
  //       post[prop] = req.body[prop];
  //     }
  //     post.save(function(err){
  //       if(err) return res.status(500).json(err.message);
  //       res.json({
  //         message:'文章更新成功了！'
  //       })
  //     })
  //   })
  // })
  app.put('/posts/:id',function(req,res){
    Post.findOneAndUpdate({_id:req.params.id},req.body,function(err){
      if(err) res.status(500).json({error:'更新失败'})
      res.send('update success')
    })
  })

  app.delete('/posts/:id',function(req,res){
    Post.findById({_id:req.params.id},function(err,post){
      post.remove(function(err){
        res.json({ message: '文章已经删除了！' });
      })
    })
  })

  app.post('/posts',function(req,res){
    console.log(req.body);
    let post = new Post(req.body);
    post.save();
    console.log('post saved!');
    res.json(req.body);
  })
}
