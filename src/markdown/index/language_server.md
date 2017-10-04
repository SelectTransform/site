> Server

```
// router.json
[{
  "{{#if 'name' in this}}": [{
    "{{#if name === 'add'}}": 'add_service'
  }, {
    "{{#elseif name === 'subtract'}}": [{
      "{{#if args.length === 2}}": 'subtract_service'
    }, {
      "{{#else}}": 'error_service'
    }]
  }]
}, {
  "{{#else}}": 'error_service'
}]

// express server
app.post('/',  (req, res) => {
  const Services = {
    add_service: function(){
        return Array.prototype.slice
                    .call(arguments)
                    .reduce((a,b) => {
                      return a+b;
                    }, 0)
    },
    subtract_service: function() {
      return arguments[0] - arguments[1]
    },
    error_service: function() {
      return 'error';
    }
  }
  const name = JSON.transform(require('./router.json'), req.body);
  res.json(Services[name].apply(this, req.body.args));
});
```
