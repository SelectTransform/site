> Server

```
// IPC.js
// The user-facing interface.
// Utilizes schema.json to resolve incoming payload
// and then constructs and executes native
// function calls from Functions.js
module.exports = (payload) => {
  const resolved = JSON.select(payload)
             .transform(require('./schema.json'))
             .root();
  const Fun = require('./Functions');
  return Fun[resolved].apply(this, payload.args);
}

// schema.json
// Validates and resolves incoming JSON payload
// into a static JSON object
[{
  "{{#if 'name' in this}}": [{
    "{{#if name === 'add'}}": "add"
  }, {
    "{{#elseif name === 'subtract'}}": [{
      "{{#if args.length === 2}}": "subtract"
    }, {
      "{{#else}}": "error"
    }]
  }, {
    "{{#elseif name === 'sha256'}}": "sha256"
  }, {
    "{{#else}}": "error"
  }]
}, {
  "{{#else}}": "error"
}]

// Functions.js
// Actual native JS function definition
module.exports = {
  add() {
    return Array.prototype.slice.call(arguments)
                .reduce((a,b) => { return a+b; }, 0)
  },
  subtract() {
    return arguments[0] - arguments[1]
  },
  sha256() {
    const secret = 'abcdefg';
    const crypto = require('crypto');
    return crypto.createHmac('sha256', secret).update(arguments[0]).digest('hex')
  },
  error() {
    return "Error"
  }
}
```
