ST extends the native `JSON` object for convenient usage.

> Syntax

```
JSON.select(data, selectorFunction)
```

## Parameters

- **`data`** : Any JavaScript object
- **`selectorFunction`** : selectorFunction is a predicate, to test each key/value pairs of the entire JSON tree. Return true to keep the element, false otherwise, taking two arguments:
  - **`key`** : the "key" of the current key/value pair being tested
  - **`value`** : the "value" of the current key/value pair being tested

## Return Value

Returns a selection object which can be queried to retrieve the final result, using the following API:

- **`values()`** : Array of values for all the key/value pair matches
- **`keys()`** : Array of keys for all the key/value pair matches
- **`paths()`** : Array of paths leading to all the key/value pair matches
- **`objects()`** : Array of full objects in which the key/value match was found
- **`root()`** : Retrieve the root node. Useful when used along with [transform](transform.html)

---

