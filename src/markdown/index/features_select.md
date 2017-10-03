<a href="select.html"><h2>1. Select</h2></a>

###### Select a JSON object or its subtree that matches your filter function

> Step 1. Take any JSON object

```
var data = {
  "links": [
    { "remote_url": "http://localhost" },
    { "file_url": "file://documents" },
    { "remote_url": "https://blahblah.com" }
  ],
  "preview": "https://image",
  "metadata": "This is a link collection"
}
```

> Step 2. Find all key/value pairs that match a selector function

```
var sel = JSON.select(data, function(key, val) {
  return /https?:/.test(val);
})
```

> Step 3. Get the result

```
var keys = sel.keys();
//  [
//    "remote_url",
//    "remote_url",
//    "preview"
//  ]

var values = sel.values();
//  [
//    "http://localhost",
//    "https://blahblah.com",
//    "https://image"
//  ]

var paths = sel.paths();
//  [
//    "[\"links\"]",
//    "[\"links\"]",
//    ""
//  ]
```

<a href='select.html' class='rectangle btn btn-primary'>Learn more about Select</a>
