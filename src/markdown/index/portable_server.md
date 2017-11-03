> Server

```
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
  const name = ST.transform(req.body.router, req.body);
  res.json(Services[name].apply(this, req.body.args));
});
```
