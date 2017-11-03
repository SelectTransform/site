> New way: Declarative approach with st.js

```
// app.js
app.get('/', function (req, res) {
  res.json(ST.select(require('./template.json'))
               .transform({user: req.user, posts: db.posts})
               .root())
})

// template.json
{
  "current_user": {
    "username": "@{{user.username}}",
    "firstname": "{{user.name.split(' ')[0]}}",
    "lastname": "{{user.name.split(' ')[1]}}"
  },
  "posts": {
    "{{#each posts}}": {
      "slug": "{{slug}}",
      "permalink": "https://blahblahblah.blahblah/{{slug}}",
      "post_title": "{{title}}",
      "post_content": "{{content}}"
    }
  }
}
```
