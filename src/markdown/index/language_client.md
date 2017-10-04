> Browser

```
var rpc = {
  name: "add",
  args: [2,3,1]
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
