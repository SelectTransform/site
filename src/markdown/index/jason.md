---

Jasonette uses `st` to:

1. Transform an "action" JSON object into a native method call
2. Transform any client-side data into a view markup, and then into actual native view components.

<br>

Here's an example where we describe an "action" (function) in a JSON object:

<br>

```
{
  "type": "$network.request",
  "options": {
    "url": "https://jsonplaceholder.typicode.com/posts"
  },
  "success": {
    "type": "$render",
    "options": {
      "data": "{{$jason}}"
    }
  }
}
```

Every function (called "action") consists of up to four attributes:

1. `"type"`: Type of action to perform. Jasonette interprets this into an actual native method call.
2. `"options"`: Arguments to send to the action
3. `"success"`: Success callback. You can chain another action here
4. `"error"`: Error callback. You can chain another action here

In above example we make a `"$network.request"` action call, with a payload of:

<br>

```
"options": {
  "url": "https://jsonplaceholder.typicode.com/posts"
}
```

This actually translates to a native objective-c function call, and when it succeeds, it triggers its "success" callback which is another action:

<br>

```
"success": {
  "type": "$render",
  "options": {
    "data": "{{$jason}}"
  }
}
```

**This is where `st.js` comes in.**

<br>

Whenever an action call is made, Jasonette automatically fills the `$jason` variable with the return value from its preceding action (`$network.request`) and runs a transform, thereby implementing an actual function call.

---
