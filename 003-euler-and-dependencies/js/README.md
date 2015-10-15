# Task

Implement a recursive function that returns all of the unique dependencies, and sub-dependencies of a module, sorted alphabetically. Dependencies should be printed as dependency@version e.g. 'inflection@1.2.6'.

Multiple versions of the same module are allowed, but duplicates modules of the same version should be removed.

## Arguments:

* tree: A dependency tree. See below for an example of the structure.

## Example

```js
var loremIpsum = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
}

getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]

```
------------
inspired by [functional-javascript-workshop](https://github.com/timoxley/functional-javascript-workshop/blob/master/exercises/recursion/problem.md)