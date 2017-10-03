> Client

```
var IPC = require('./IPC')

const addition = IPC({
  name: "add",
  args: [2,3,1]
})
// returns 6

const subtraction = IPC({
  name: "subtract",
  args: [3,1]
})
// returns 2
```
