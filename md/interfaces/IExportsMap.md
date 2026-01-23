[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IExportsMap

# Interface: IExportsMap

Defined in: [index.ts:377](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L377)

Package exports map for the `exports` field.
Defines entry points of a package when imported by name.

```json
{
  "exports": {
    ".": "./index.js",
    "./feature": "./src/feature.js",
    "./package.json": "./package.json"
  }
}
```

## See

 - https://nodejs.org/api/packages.html#exports
 - https://nodejs.org/api/packages.html#subpath-exports

## Indexable

\[`path`: `string`\]: `string` \| [`IConditionalExport`](IConditionalExport.md) \| `null`

Maps subpath patterns to file paths or conditional exports.
Use `null` to restrict access to a subpath.
