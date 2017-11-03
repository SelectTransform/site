## 1. Use only a subtree of a template

Sometimes you don't want to use the entire template to parse data. In this case you can **select a subtree of a template** and use that to parse data.

<br>

```
var template = {
  body: {
    sections: [{
      items: {
        "{{#each items}}": {
          type: "{{type}}",
          url: "{{url}}"
        }
      }
    }]
  }
};

var finalTemplate = ST.select(template, function(key, val) {
                          return key === 'type';
                        })
                        .transform({ type: "image" }).root();

/*
finalTemplate = {
  body: {
    sections: [{
      items: {
        "{{#each items}}": {
          type: "image",
          url: "{{url}}"
        }
      }
    }]
  }
}
*/

```

## 2. Filter Data + Transform with template

Sometimes you have a large set of data but only want to transform a portion of it. In this case you can **select a subtree of the data object** and parse using a template.

<br>

```
var data = {
  "item": { "url": "http://localhost", "text": "localhost" },
  "items": [
    { "url": "file://documents", "text": "documents" },
    { "url": "https://blahblah.com", "text": "blah"  }
  ],
  "nestedItems": {
    "childItems": [{
      "url": "http://hahaha.com",
      "text": "haha"
    }, {
      "url": "https://hohoho.com",
      "text": "hoho"
    }]
  }
};

var selection = ST.select(data, function(key, val) {
  return key === 'url';
});

var urls = selection.values();
/**
*  urls = [
*    "http://localhost",
*    "file://documents",
*    "https://blahblah.com",
*    "http://hahaha.com",
*    "https://hohoho.com"
*  ]
*/

var transformed = selection.transformWith({
  "tag": "<a href='{{url}}'>{{text}}</a>"
})

var objects = transformed.objects()
/**
* objects = [
*   { "tag": "<a href='http://localhost'>localhost</a>" },
*   { "tag": "<a href='file://documents'>documents</a>" },
*   { "tag": "<a href='https://blahblah.com'>blah</a>" },
*   { "tag": "<a href='https://hahaha.com'>haha</a>" },
*   { "tag": "<a href='https://hohoho.com'>hoho</a>" }
* ]
*/

var values = transformed.values()
/**
* values = [
*   "<a href='http://localhost'>localhost</a>",
*   "<a href='file://documents'>documents</a>",
*   "<a href='https://blahblah.com'>blah</a>",
*   "<a href='https://hahaha.com'>haha</a>",
*   "<a href='https://hohoho.com'>hoho</a>"
* ]
*/

var keys = transformed.keys()
/**
* keys = ["tag", "tag", "tag", "tag", "tag"]
*/


var root = transformed.root()
/**
* root = {
*   "item": {
*     "tag": "<a href='http://localhost'>localhost</a>"
*   },
*   "items": [
*     { "tag": "<a href='file://documents'>documents</a>" },
*     { "tag": "<a href='https://blahblah.com'>blah</a>" },
*   ],
*   "nestedItems": {
*     "childItems": [
*       { "tag": "<a href='https://hahaha.com'>haha</a>" },
*       { "tag": "<a href='https://hohoho.com'>hoho</a>" }
*     ]
*   }
* };
*/

var transformed = ST.select({
  "{{#each items}}": {
    tag: "<a href='{{url}}'>{{text}}</a>"
  }
}).transform({ items: urls });
    
var root = transformed.root();
/*
root = {
  "item": { "tag": "<a href='http://localhost'>localhost</a>" },
  "items": [
    { "tag": "<a href='file://documents'>documents</a>" },
    { "tag": "<a href='https://blahblah.com'>blah</a>" }
  ],
  "nestedItems": {
    "childItems": {
      "tag": "<a href='http://hahaha.com'>haha</a>"
    },
    "tag": "<a href='https://hohoho.com'>hoho</a>"
  }
}
*/

var keys = transformed.keys();
/*
keys = ["tag", "tag", "tag", "tag", "tag"];
*/

var values = transformed.values();
/*
values = [
  "<a href='http://localhost'>localhost</a>",
  "<a href='file://documents'>documents</a>",
  "<a href='https://blahblah.com'>blah</a>",
  "<a href='http://hahaha.com'>haha</a>",
  "<a href='https://hohoho.com'>hoho</a>"
]
*/

var objects = transformed.objects();
/*
objects = [
  { "tag": "<a href='http://localhost'>localhost</a>" },
  { "tag": "<a href='file://documents'>documents</a>" },
  { "tag": "<a href='https://blahblah.com'>blah</a>" },
  { "tag": "<a href='http://hahaha.com'>haha</a>" },
  { "tag": "<a href='https://hohoho.com'>hoho</a>" }
]
*/

var paths = transformed.paths();
```


## 3. Nesting Templates

Sometimes you may want to reuse a template by nesting inside another template. In this case you just need to select a subtree of the parent template and plug in a child template.

<br>

```
var data = {
  "item": { "url": "http://localhost" },
  "items": [
    { "url": "file://documents" },
    { "url": "https://blahblah.com" }
  ],
  "nestedItems": {
    "childItems": [{
      "url": "http://hahaha.com",
      "text": "haha"
    }, {
      "url": "https://hohoho.com",
      "text": "hoho"
    }]
  }
};
var template = {
  "items": {
    "{{#each items}}": "{{partial}}"
  }
}
var partial = {
  "type": "label",
  "text": "{{name}}"
}
var selected = ST.select(template, function(key, val) {
  return val === '{{partial}}';
})
var finalTemplate = selected.transform({
  "partial": {
    "type": "label",
    "text": "{{name}}"
  }
}).root();

/*
  finalTemplate = {
    "items": {
      "{{#each items}}": {
        "type": "label",
        "text": "{{name}}"
      }
    }
  }
*/
```
