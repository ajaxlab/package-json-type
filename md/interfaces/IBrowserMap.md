[**package-json-type**](../README.md)

***

[package-json-type](../globals.md) / IBrowserMap

# Interface: IBrowserMap

Defined in: [index.ts:49](https://github.com/ajaxlab/package-json-type/blob/44b7b1d8e2c534bb3c6eadf0eee5fa4ec56f31af/src/index.ts#L49)

Browser field replacement map.
Maps module paths to browser-specific alternatives or `false` to ignore.

```json
{
  "browser": {
    "./lib/server.js": "./lib/browser.js",
    "fs": false
  }
}
```

## See

https://github.com/defunctzombie/package-browser-field-spec

## Indexable

\[`modulePath`: `string`\]: `string` \| `false`
