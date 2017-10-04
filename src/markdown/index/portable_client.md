> Browser

```
var router = [{
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
}];

var rpc = {
  name: "add",
  args: [2,3,1],
  router: router
}

fetch("http://localhost:3000", {
  method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(rpc)
).then(function(res) {
  console.log(res.json());
})
```
