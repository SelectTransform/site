## In a browser

```
<script src="st.js"></script>
<script>
var parsed = JSON.select({ "items": [1,2,3,4] })
                .transformWith({
                  "{{#each items}}": {
                    "type": "label", "text": "{{this}}"
                  }
                })
                .root();
</script>
```

## In node.js

> Install through npm:

```
$ npm install stjs
```

> Use

```
require('st');

var parsed = JSON.select({ "items": [1,2,3,4] })
                .transformWith({
                  "{{#each items}}": {
                    "type": "label", "text": "{{this}}"
                  }
                })
                .root();
```
