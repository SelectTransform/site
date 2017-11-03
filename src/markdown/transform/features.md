## 1. Basic
Use `{{ }}` notation to fill out a template with data to generate a new JSON

<div class='row'>
<div class='col'>
<blockquote>1. Template and Data</blockquote>
<pre>
<code>
var template = {
  "menu": {
    "flavor": "{{flavor}}",
    "richness": "{{richness}}",
    "garlic amount": "{{garlic_amount}}",
    "green onion?": "{{green_onion}}",
    "sliced pork?": "{{pork_amount}}",
    "secret sauce": "{{sauce_amount}}",
    "noodle's texture": "{{texture}}"
  }
}

var data = {
  "flavor": "strong",
  "richness": "ultra rich",
  "garlic_amount": "1 clove",
  "green_onion": "thin green onion",
  "pork_amount": "with",
  "sauce_amount": "double",
  "texture": "extra firm"
}
</code>
</pre>
</div>
<div class='col'>
<blockquote>2. Select and Transform</blockquote>
<pre>
<code>
ST.select(template)
    .transform(data)
    .root();
</code>
</pre>
</div>
<div class='col'>
<blockquote>3. Result</blockquote>
<pre>
<code>
{
  "menu": {
    "flavor": "strong",
    "richness": "ultra rich",
    "garlic amount": "1 clove",
    "green onion?": "thin green onion",
    "sliced pork?": "with",
    "secret sauce": "double",
    "noodle's texture": "extra firm"
  }
}
</code>
</pre>
</div>
</div>

## 2. Loop

Use `#each` to iterate through items

<div class='row'>
<div class='col'>
<blockquote>1. Template and Data</blockquote>
<pre>
<code>
var template = {
  "orders": {
    "{{#each customers}}": {
      "order": "One {{menu}} for {{name}}!"
    }
  }
}

var data = {
  "customers": [{
    "name": "Hatter",
    "menu": "miso ramen"
  }, {
    "name": "March Hare",
    "menu": "tonkotsu ramen"
  }, {
    "name": "Dormouse",
    "menu": "miso ramen"
  }, {
    "name": "Alice",
    "menu": "cup noodles"
  }]
}
</code>
</pre>
</div>
<div class='col'>
<blockquote>2. Select and Transform</blockquote>
<pre>
<code>
ST.select(template)
    .transform(data)
    .root();
</code>
</pre>
</div>
<div class='col'>
<blockquote>3. Result</blockquote>
<pre>
<code>
{
  "orders": [{
    "order": "One miso ramen for Hatter!"
  }, {
    "order": "One tonkotsu ramen for March Hare!"
  }, {
    "order": "One miso ramen for Dormouse!"
  }, {
    "order": "One cup noodles for Alice!"
  }]
}
</code>
</pre>
</div>
</div>

## 3. Conditional

Use `#if`/`#elseif`/`#else` to selectively fill out a template

<div class='row'>
<div class='col'>
<blockquote>1. Template and Data</blockquote>
<pre>
<code>
var template = {
  "response": [{
    "{{#if spicy < 7}}": {
      "message": "Coming right up!"
    }
  }, {
    "{{#elseif spicy < 9}}": {
      "message": "Are you sure? It is very spicy"
    }
  }, {
    "{{#else}}": {
      "message": "Please sign here where it says you're responsible for this decision"
    }
  }]
}

var data = {
  "spicy": 8
}
</code>
</pre>
</div>
<div class='col'>
<blockquote>2. Select and Transform</blockquote>
<pre>
<code>
ST.select(template)
    .transform(data)
    .root();
</code>
</pre>
</div>
<div class='col'>
<blockquote>3. Result</blockquote>
<pre>
<code>
{
  "response": {
    "message": "Are you sure? It is very spicy"
  }
}
</code>
</pre>
</div>
</div>

## 4. Existential Operator

You can use the existential operator `#?` to exclude an attribute altogether if the template evaluates to a falsy value.

<div class='row'>
<div class='col'>
<blockquote>1. Template and Data</blockquote>
<pre>
<code>
var data = {
  notifications: {
    home: 1,
    invite: 2
  }
};
var template = {
  tabs: [{
    text: "home",
    badge: "{{#? notifications.home}}"
  }, {
    text: "message",
    badge: "{{#? notification.message}}"
  }, {
    text: "invite",
    badge: "{{#? notification.invite}}"
  }]
}
</code>
</pre>
</div>
<div class='col'>
<blockquote>2. Select and Transform</blockquote>
<pre>
<code>
ST.select(template)
    .transform(data)
    .root();
</code>
</pre>
</div>
<div class='col'>
<blockquote>3. Result</blockquote>
<pre>
<code>
{
  tabs: [{
    text: "home",
    badge: 1
  }, {
    text: "message"
  }, {
    text: "invite",
    badge: 2
  }]
}
</code>
</pre>
</div>
</div>

## 5. Concat

You can concatenate multiple items and arrays into a single array using the `#concat` operator.

<div class='row'>
<div class='col'>
<blockquote>1. Template and Data</blockquote>
<pre>
<code>
var data = {
  numbers: [1,2,3]
};
var template = {
  "items": {
    "{{#concat}}": [
      {
        "type": "label",
        "text": "Length: {{numbers.length}}"
      },
      {
        "{{#each numbers}}": {
          "type": "label",
          "text": "{{this}}"
        }
      }
    ]
  }
};
</code>
</pre>
</div>
<div class='col'>
<blockquote>2. Select and Transform</blockquote>
<pre>
<code>
ST.select(template)
    .transform(data)
    .root();
</code>
</pre>
</div>
<div class='col'>
<blockquote>3. Result</blockquote>
<pre>
<code>
{
  "items": [{
    "type": "label",
    "text": "Length: 3"
  }, {
    "type": "label",
    "text": 1
  }, {
    "type": "label",
    "text": 2
  }, {
    "type": "label",
    "text": 3
  }]
}
</code>
</pre>
</div>
</div>

## 6. Merge

You can merge multiple objects into a single object using the `#merge` operator. If there are any overlapping attributes, the ones that come later will override the previously set attribute.

<div class='row'>
<div class='col'>
<blockquote>1. Template and Data</blockquote>
<pre>
<code>
var data = {
  numbers: [1,2,3],
  align: "right",
  size: "14"
};
var template = {
  "{{#merge}}": [
    {
      "type": "label",
      "text": "Length: {{numbers.length}}"
    },
    {
      "style": {
        "align": "{{align}}",
        "size": "{{size}}"
      },
      "action": {
        "type": "$render"
      }
    }
  ]
};
</code>
</pre>
</div>
<div class='col'>
<blockquote>2. Select and Transform</blockquote>
<pre>
<code>
ST.select(template)
    .transform(data)
    .root();
</code>
</pre>
</div>
<div class='col'>
<blockquote>3. Result</blockquote>
<pre>
<code>
{
  "type": "label",
  "text": "Length: 3",
  "style": {
    "align": "right",
    "size": "14"
  },
  "action": {
    "type": "$render"
  }
}
</code>
</pre>
</div>
</div>

## 7. $root

Sometimes you need to refer to the root data object while iterating through an `#each` loop.

In this case you can use a special keyword named `$root`.

<div class='row'>
<div class='col'>
<blockquote>1. Template and Data</blockquote>
<pre>
<code>
var template = {
  "{{#each posts}}": [
    "{{content}}", "{{$root.users[user_id]}}"
  ]
}
var data = {
  users: ["Alice", "Bob", "Carol"],
  posts: [{
    content: "Show me the money",
    user_id: 1
  }, {
    content: "hello world",
    user_id: 0
  }, {
    content: "what is the meaning of life?",
    user_id: 2
  }]
}
</code>
</pre>
</div>
<div class='col'>
<blockquote>2. Transformed Result</blockquote>
<pre>
<code>
[
  ["Show me the money", "Bob"],
  ["hello world", "Alice"],
  ["what is the meaning of life?", "Carol"]
]
</code>
</pre>
</div>
</div>

## 8. Inline JavaScript

You can use ANY native javascript expression inside the template.

<div class='row'>
<div class='col'>
<blockquote>1. Template and Data</blockquote>
<pre>
<code>
var template = {
  "ranking": {
    "{{#each players.sort(function(p1, p2) { return p2.quantity - p1.quantity; }) }}": "{{name}} ate {{quantity}}"
  },
  "winner": "{{players.sort(function(p1, p2) { return p2.quantity - p1.quantity; })[0].name }}"
};
var data = {
  "players": [{
    "name": "Alice",
    "quantity": 102
  }, {
    "name": "Mad Hatter",
    "quantity": 108
  }, {
    "name": "Red Queen",
    "quantity": 100
  }]
};
</code>
</pre>
</div>
<div class='col'>
<blockquote>2. Select and Transform</blockquote>
<pre>
<code>
ST.select(template)
    .transform(data)
    .root();
</code>
</pre>
</div>
<div class='col'>
<blockquote>3. Result</blockquote>
<pre>
<code>
{
  "ranking": [
    "Mad Hatter ate 108",
    "Alice ate 102",
    "Red Queen ate 100"
  ],
  "winner": "Mad Hatter"
}
</code>
</pre>
</div>
</div>

