You can select any JSON tree to find only the subtrees that satisfy your needs.

<div class='row'>
<div class='col'>
<blockquote>1. Take any data</blockquote>
<pre><code>
var data = {
  links: [
    { "remote_url": "http://localhost" },
    { "file_url": "file://documents" },
    { "remote_url": "https://blahblah.com" }
  ],
  preview: "https://image",
  metadata: "This is a link collection"
};
</code></pre>
</div>
<div class='col'>
<blockquote>2. Select subtree</blockquote>
<pre><code>
var selection = JSON.select(data, function(key, val) {
  return /https?:/.test(val);
})
</code></pre>
</div>
<div class='col'>
<blockquote>3. Query the selection object</blockquote>
<pre><code>
var selected_values = selection.values();
//  [
//    "http://localhost",
//    "https://blahblah.com",
//    "https://image"
//  ]

var selected_keys = selection.keys();
//  [
//    "remote_url",
//    "remote_url",
//    "preview"
//  ]

var selected_objects = selection.objects();
//  [
//    { "remote_url": "http://localhost" },
//    { "remote_url": "https://blahblah.com" },
//    {
//      "links": [
//        { "remote_url": "http://localhost" },
//        { "file_url": "file://documents" },
//        { "remote_url": "https://blahblah.com" }
//      ],
//      "preview": "https://image",
//      "metadata": "This is a link collection"
//    }
//  ]
//
//

var selected_paths = selection.paths();
//  [
//    "[\"links\"][0]",
//    "[\"links\"][2]",
//    ""
//  ]
</code></pre>
</div>
</div>

---
