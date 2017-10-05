const mixin = {
  js: [ 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/highlight.min.js', ],
  css: [
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.8.0/styles/railscasts.min.css',
    'https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700',
    'https://fonts.googleapis.com/css?family=Merriweather:900',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css',
    "src/style.css"
  ],
  init: function() {
    hljs.configure({ languages: ["javascript"] });
    hljs.initHighlighting();
  }
};
module.exports = [{
  input: {
    $components: [
      { $type: "h1", class: "center", $text: "ST" },
      {
        class: "center", $components: [
          { $text: "Select Transform" },
          { $type: "br" },
          { $text: "bend JSON to your will", class: 'em' },
          { $type: "a", href: "https://github.com/SelectTransform/st.js", class: "btn btn-primary", $text: "Github" },
          { $type: "a", href: "https://selecttransform.github.io/playground/", class: "btn btn-primary", $text: "Try" },
          { $type: "a", href: "https://twitter.com/selecttransform", class: "btn btn-primary", $text: "Twitter" }
        ]
      },
      { $type: "hr" },
      { $type: "img", src: "src/st.gif" },
      {
        class: 'container',
        $components: [
          { $type: "hr" },
          { $type: "h1", $text: "Features" },
          { 
            class: "row", $components: [
              { class: "col", $inherit: "md", $file: "src/markdown/index/features_select.md" },
              { class: "col", $inherit: "md", $file: "src/markdown/index/features_transform.md" },
            ]
          },
          { $type: "hr" },
          { $type: "h1", $text: "What Can I Use It For?" },
          { $text: "JSON powers almost everything in the world." },
          { $text: "Being able to bend any JSON to your will means you can do all kinds of magical things" },
          { $type: "hr" },
          { $type: "h2", $text: "1. Declarative JSON API Template" },
          { $text: "Build JSON using a simple, human-readable, and declarative template instead of manually coding it." },
          { $type: "a", href: "https://github.com/SelectTransform/api.template", class: "btn btn-primary rectangle", $text: "Visit Github" },
          { $type: "br" },
          { 
            class: "row", $components: [
              { class: "col", $inherit: "md", $file: "src/markdown/index/api_before.md" },
              { class: "col", $inherit: "md", $file: "src/markdown/index/api_after.md" },
            ]
          },
          { $type: "hr" },
          { $type: "h2", $text: "2. Parse JSON like never before" },
          { $html: "Parse JSON anywhere, both frontend and backend, as easy as using <code>JSON.stringify</code> or <code>JSON.parse</code>" },
          { $type: "a", href: "https://github.com/SelectTransform/playground", class: "btn btn-primary rectangle", $text: "Visit Github" },
          { $type: "br" },
          { 
            class: "row", $components: [
              { $type: "img", class: "col", src: "src/st.gif" }
            ]
          },
          { $type: "hr" },
          { $type: "h2", $text: "3. JSON as a JSON Query Language" },
          { $text: "Make complex API queries purely written in JSON." },
          { $type: "br" },
          { $text: "Since templates in ST are written in JSON, you can pass them around anywhere just like any other data object." },
          { $text: "Notice we're not creating some new query language, it's just JSON. No convoluted infrastructure to set up!" },
          { $type: "a", href: "https://github.com/SelectTransform/JSONQL", class: "btn btn-primary rectangle", $text: "Visit Github" },
          { $type: "br" },
          { 
            class: "row", $components: [
              { $type: "img", class: "col", src: "src/jsonql1.png" },
              { $type: "img", class: "col", src: "src/jsonql2.png" }
            ]
          },
          { $type: "hr" },
          { $type: "h2", $text: "4. App as Data" },
          { $html: "Templates are normally used for views" },
          { $html: "But the cool thing about JSON is it can be used to declaratively represent ANYTHING from Model to View to Controller." },
          { $type: "br" },
          { $html: "What if we set <b>executable functions</b> as leaf nodes of an object, select & transform it, and then auto-trigger the resolved function?" },
          { $text: "We have built a router in JSON!" },
          { $type: "br" },
          { $text: "Basically, the entire router logic is represented as a piece of data." },
          { $type: "br" },
          { 
            class: "row", $components: [
              { class: "col", $inherit: "md", $file: "src/markdown/index/language_client.md" },
              { class: "col", $inherit: "md", $file: "src/markdown/index/language_server.md" },
            ]
          },
          { $type: "hr" },
          { $type: "h2", $text: "5. Routerless Server" },
          { $html: "Let's take the router example from right above. Since our router logic is just a JSON (<code>router.json</code>), we don't even need it on the server side." },
          { $html: "What if we DON'T keep <code>router.json</code> on the server, but send it from the browser?" },
          { 
            class: "row", $components: [
              { class: "col", $inherit: "md", $file: "src/markdown/index/portable_client.md" },
              { class: "col", $inherit: "md", $file: "src/markdown/index/portable_server.md" },
            ]
          },
          { $html: "What's going on here?" },
          { $type: "br" },
          { $html: "We are looking at a server WITHOUT a router." },
          { $html: "Instead of implementing a router on the server, we send the router itself as part of a network request!" },
          { $type: "br" },
          { $html: "This type of JSON-powered portability provides extreme flexibility when creating interfaces for microservices and RPC endpoints" },
          { $type: "br" },
          { $html: "Also, remember that you can bake <a href='transform.html'>validation, conditionals, loops, etc.</a> all in a single JSON IPC/RPC call, which makes it extremely powerful and efficient." },
          { $type: "hr" },
          { $type: "h2", $text: "6. Build your OWN Turing complete JSON markup language!" },
          { $text: "If you read this far, you may feel like you could implement practically any programming concept in a declarative manner, using JSON." },
          { $html: "This is because ST.js is a low level building block for creating a <b>Turing Complete JSON markup language</b>" },
          { $type: "br" },
          { $html: "<code>st.js</code> is the core JSON parser that powers <a href='https://www.jasonette.com'>Jasonette</a>, a framework that lets you build native iOS/Android apps by writing nothing but a JSON markup." },
          { $type: "a", href: "https://www.jasonette.com", class: "btn btn-primary rectangle", $text: "Check out Jasonette" },
          { class: "vid", $components: [{
            class: "video-container", $components: [{
              $type: "iframe", width: "853", height: "480", src: "https://www.youtube.com/embed/hfevBAAfCMQ", frameborder: "0", allowfullscreen: "allowfullscreen"
            }]
          }]},
          { $type: "br" },
          { $text: "But Jasonette is just one implementation." },
          { $html: "Want to build your own turing complete JSON markup language?" },
          { $type: "br" },
          { $html: "Learn more about how Jasonette implements programming concepts by reading <a href='http://blog.jasonette.com/2017/02/15/functional-programming-in-json/'>this blog post</a>, and build your own using ST.js!" },
          { $type: "hr" },
          { $type: "h1", $text: "How to use" },
          { $inherit: "md", $file: "src/markdown/index/usage.md" },
          { $type: "hr" },
        ]
      }
    ]
  },
  output: "index.html", js: mixin.js, css: mixin.css, init: mixin.init
}, {
  input: {
    $components: [
      { $type: "h1", class: "center", $text: "SELECT" },
      {
        class: "center", $components: [
          { $type: "a", href: "https://selecttransform.github.io/site", class: "btn btn-primary", $text: "Home" },
          { $type: "a", href: "https://github.com/SelectTransform/st.js", class: "btn btn-primary", $text: "Github" },
          { $type: "a", href: "https://selecttransform.github.io/playground/", class: "btn btn-primary", $text: "Try" },
          { $type: "a", href: "https://twitter.com/selecttransform", class: "btn btn-primary", $text: "Twitter" }
        ]
      },
      {
        class: "container",
        $components: [
          { $type: "h1", $text: "Syntax" },
          { class: "section", $inherit: "md", $file: "src/markdown/select/syntax.md" },
        ]
      },
      {
        class: "container",
        $components: [
          { $type: "h1", $text: "Example" },
          { class: "section", $inherit: "md", $file: "src/markdown/select/example.md" }
        ]
      }
    ]
  },
  output: "select.html", js: mixin.js, css: mixin.css, init: mixin.init
}, {
  input: {
    $components: [
      { $type: "h1", class: "center", $text: "TRANSFORM" },
      {
        class: "center", $components: [
          { $type: "a", href: "https://selecttransform.github.io/site", class: "btn btn-primary", $text: "Home" },
          { $type: "a", href: "https://github.com/SelectTransform/st.js", class: "btn btn-primary", $text: "Github" },
          { $type: "a", href: "https://selecttransform.github.io/playground/", class: "btn btn-primary", $text: "Try" },
          { $type: "a", href: "https://twitter.com/selecttransform", class: "btn btn-primary", $text: "Twitter" }
        ]
      },
      {
        class: "container",
        $components: [
          { $type: "h1", $text: "Features" },
          { $inherit: "md", $file: "src/markdown/transform/features.md" }
        ]
      },
      {
        class: "container",
        $components: [
          { $type: "h1", $text: "Syntax" },
          { $inherit: "md", $file: "src/markdown/transform/syntax.md" }
        ]
      },
      {
        class: "container",
        $components: [
          { $type: "h1", $text: "Examples" },
          { $inherit: "md", $file: "src/markdown/transform/examples.md" }
        ]
      }
    ]
  },
  output: "transform.html", js: mixin.js, css: mixin.css, init: mixin.init
}]
