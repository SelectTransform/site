There are 2 ways of transforming an object:

## 1. transform()

Select a template or its subtree, and transform data with the selected template.

> ST.select(`TEMPLATE`).transform(`DATA`)

```
ST.select({
      "{{#each items}}": {
        "type": "label",
        "text": "{{name}}"
      }
    })
    .transform({
      items: [
        { id: 1, name: "Ja" },
        { id: 2, name: "Ka" },
        { id: 3, name: "La" }
      ]
    })
    .root();
```

## 2. transformWith()

Select a data object or its subtree and transform with a template. 

> ST.select(`DATA`).transformWith(`TEMPLATE`)

```
ST.select({
      items: [
        { id: 1, name: "Ja" },
        { id: 2, name: "Ka" },
        { id: 3, name: "La" }
      ]
    })
    .transformWith({
      "{{#each items}}": {
        "type": "label",
        "text": "{{name}}"
      }
    })
    .root();

```

---
