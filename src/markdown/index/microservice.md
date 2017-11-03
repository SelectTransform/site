```
// This is an Express.js app
app.get('/', function (req, res) {
  res.json(ST.select(require('./jobs.json'))
               .transform({user: req.user, posts: db.posts})
               .root())
})

// jobs.json
[{
  "{{#if 'name' in this}}": [{
    "{{#if name === 'add'}}": {
      "type": "add"
    }
  }, {
    "{{#elseif name === 'subtract'}}": [{
      "{{#if args.length === 2}}": {
        "type": "subtract"
      }
    }, {
      "{{#else}}": {
        "type": "error",
        "options": {
          "message": "Requires 2 items as argument"
        }
      }
    }]
  }, {
    "{{#elseif name === 'sha256'}}": {
      "type": "sha256"
    }
  }, {
    "{{#else}}": {
      "type": "error",
      "options": {
        "message": "Function not registered"
      }
    }
  }]
}, {
  "{{#else}}": {
    "type": "error",
    "options": {
      "message": "Need a function name"
    }
  }
}]
  
```
