> Client

```
var IPC = require('./IPC')

const addition = IPC({
  name: "add",
  args: [2,3,1],
  router: [{
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
})
// returns 6

const subtraction = IPC({
  name: "subtract",
  args: [3,1],
  router: [{
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
})
// returns 2
```
