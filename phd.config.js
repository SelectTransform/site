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
          { $text: "Select & Transform" },
          { $type: "a", href: "https://github.com/SelectTransform/st.js", class: "btn btn-primary", $text: "Github" },
          { $type: "a", href: "editor.html", class: "btn btn-primary", $text: "Demo" },
          { $type: "a", href: "", class: "btn btn-primary", $text: "Examples" }
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
          { $text: "Being able to manipulate any JSON at your will means you can do all kinds of magical things" },
          { $type: "h2", $text: "1. Declarative JSON API Template" },
          { $text: "Build JSON using a simple, human-readable, and declarative template instead of manually coding." },
          { $type: "br" },
          { 
            class: "row", $components: [
              { class: "col", $inherit: "md", $file: "src/markdown/index/api_before.md" },
              { class: "col", $inherit: "md", $file: "src/markdown/index/api_after.md" },
            ]
          },
          { $type: "hr" },
          { $type: "h2", $text: "2. Parse JSON like never before" },
          { $html: "Parse JSON anywhere, both frontend and the backend, as easy as using <code>JSON.stringify</code> or <code>JSON.parse</code>" },
          { $type: "br" },
          { 
            class: "row", $components: [
              { $type: "img", class: "col", src: "src/st.gif" }
            ]
          },
          { $type: "hr" },
          { $type: "h2", $text: "3. JSON as a JSON Query Language" },
          { $text: "Make complex API queries purely written in JSON." },
          { $text: "Since templates in ST are written in JSON, you can pass them around anywhere just like any other data object." },
          { $text: "Notice we're not creating some new query language, it's just JSON. No convoluted infrastructure to set up!" },
          { $type: "br" },
          { 
            class: "row", $components: [
              { $type: "img", class: "col", src: "src/jsonql1.png" },
              { $type: "img", class: "col", src: "src/jsonql2.png" }
            ]
          },
          { $type: "hr" },
          { $type: "h2", $text: "4. Template Everything! Not just views." },
          { $html: "Templates are normally used for views" },
          { $html: "But the cool thing about JSON is it can be used to represent ANYTHING from Model to View to Controller in a declarative manner." },
          { $type: "br" },
          { $html: "Imagine what would happen if you set <b>executable functions</b> as leaf nodes of an object, select&transform it, and then trigger the resolved function." },
          { $text: "You have implemented a JSON powered router!" },
          { $type: "br" },
          { 
            class: "row", $components: [
              { class: "col", $inherit: "md", $file: "src/markdown/index/language_client.md" },
              { class: "col", $inherit: "md", $file: "src/markdown/index/language_server.md" },
            ]
          },
          { $text: "Furthermore, since the template itself is also written in JSON, it's completely portable." },
          { $html: "For example, we could take the same example from above and move <code>router.json</code> to the frontend." },
          { 
            class: "row", $components: [
              { class: "col", $inherit: "md", $file: "src/markdown/index/portable_client.md" },
              { class: "col", $inherit: "md", $file: "src/markdown/index/portable_server.md" },
            ]
          },
          { $html: "That's right! We are looking at a server WITHOUT a router. The router itself is transmitted as a network request!" },
          { $html: "This type of JSON powered portability provides extreme flexibility when creating interfaces for microservices and RPC endpoints" },
          { $type: "br" },
          { $text: "Remeber that you can bake validation, conditionals, loops, etc. all in a single JSON IPC/RPC call, which makes it extremely powerful and efficient." },
          { $type: "hr" },
          { $type: "h2", $text: "5. Build your OWN Turing complete JSON markup language!" },
          { $text: "If you read this far, you may feel like you could implement practically any programming concept in a declarative manner, using JSON." },
          { $html: "This is because ST.js is a low level building block for building a <b>Turing Complete JSON markup language</b>" },
          { $type: "br" },
          { $html: "<code>st.js</code> is the core JSON parser that powers <a href='https://www.jasonette.com'>Jasonette</a>, a framework that lets you build native iOS/Android apps by writing nothing but a JSON markup." },
          { class: "vid", $components: [{
            class: "video-container", $components: [{
              $type: "iframe", width: "853", height: "480", src: "https://www.youtube.com/embed/hfevBAAfCMQ", frameborder: "0", allowfullscreen: "allowfullscreen"
            }]
          }]},
          { $type: "br" },
          { $text: "But Jasonette is just one implementation." },
          { $text: "Want to build your own turing complete JSON markup language? See example to learn more." },
          { $type: "hr" },
          { $type: "h1", $text: "How to use" },
          { $inherit: "md", $file: "src/markdown/index/usage.md" },
          { $type: "hr" },
          { $type: "h1", $text: "Try Demo" },
          { $type: "a", href: "editor.html", class: "rectangle btn btn-primary", $text: "Demo" },
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
          { $type: "a", href: "/site", class: "btn btn-primary", $text: "Home" },
          { $type: "a", href: "https://github.com/SelectTransform/st.js", class: "btn btn-primary", $text: "Github" },
          { $type: "a", href: "", class: "btn btn-primary", $text: "Examples" }
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
          { $type: "a", href: "/site", class: "btn btn-primary", $text: "Home" },
          { $type: "a", href: "https://github.com/SelectTransform/st.js", class: "btn btn-primary", $text: "Github" },
          { $type: "a", href: "", class: "btn btn-primary", $text: "Examples" }
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
