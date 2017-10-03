> Old way: Manually construct object

```
// app.js
app.get('/', function (req, res) {
  var response = {}
  response["current_user"] = {
    username: "@" + req.user.username,
    firstname: req.user.name.split(' ')[0],
    lastname: req.user.name.split(' ')[1]
  }
  var transformed_posts = db.posts.map(function(post){
    return {
      slug: post.slug
      permalink: "https://blahblahblah.blahblah/" + post.slug,
      post_title: post.title,
      post_content: post.content
    }
  })
  response["posts"] = transformed_posts
  res.json(response)
})
```
